import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';

type SignInParams = {
  email: string;
  password: string;
};

type SignUpParams = {
  email: string;
  password: string;
};

export const firebaseAuthService = {
  signIn: async ({ email, password }: SignInParams) => {
    const result = await auth().signInWithEmailAndPassword(email, password);

    return {
      uid: result.user.uid,
      email: result.user.email,
    };
  },

  signUp: async ({ email, password }: SignUpParams) => {
    const result = await auth().createUserWithEmailAndPassword(email, password);

    return {
      uid: result.user.uid,
      email: result.user.email,
    };
  },

  signInWithGoogle: async () => {
    await GoogleSignin.hasPlayServices();

    const response = await GoogleSignin.signIn();
    if (!isSuccessResponse(response)) {
      throw new Error('Google Sign-In was cancelled or did not return tokens');
    }

    const { idToken } = response.data;
    if (!idToken) {
      throw new Error('Google Sign-In idToken is missing');
    }

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const result = await auth().signInWithCredential(googleCredential);

    return {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    };
  },

  signOut: async () => {
    await auth().signOut();
  },

  getCurrentUser: () => {
    const user = auth().currentUser;

    if (!user) {
      return null;
    }

    return {
      uid: user.uid,
      email: user.email,
    };
  },
};
