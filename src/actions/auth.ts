import { supabase } from '../supabase/client';

type AuthLogin = {
  email: string;
  password: string;
};

type AuthRegister = {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
};

export const signUp = async ({
  email,
  password,
  fullName,
  phone,
}: AuthRegister) => {
  try {
    // Crea el usuario
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    const userId = data.user?.id;

    if (!userId) {
      throw new Error('Error al obtener el id del usuario');
    }

    // Autentica el usuario
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      console.log(signInError);
      throw new Error('Email o contraseña incorrectos');
    }

    // Inserta el rol por defecto (en este caso customer)
    const { error: roleError } = await supabase.from('user_roles').insert({
      user_id: userId,
      role: 'customer',
    });

    if (roleError) {
      console.log(roleError);
      throw new Error('Error al registrar el rol del usuario');
    }

    // Inserta los datos del usuario en la tabla customers
    const { error: customerError } = await supabase.from('customers').insert({
      user_id: userId,
      full_name: fullName,
      phone,
      email,
    });

    if (customerError) {
      console.log(customerError);
      throw new Error('Error al registrar los datos del usuario');
    }

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al registrar el usuario', { cause: error });
  }
};

export const signIn = async ({ email, password }: AuthLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
    throw new Error('Email o contraseña incorrectos');
  }

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    throw new Error('Error al cerrar sesión');
  }
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log(error);
    throw new Error('Error al obtener la sesión');
  }

  return data;
};
