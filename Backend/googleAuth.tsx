import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    if (error) console.error('Error signing in with Google:', error);
    else console.log('User signed in:', user);
};
