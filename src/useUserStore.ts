import { create } from 'zustand'

// User interface
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
}

// Profile update data interface
interface ProfileUpdateData {
  name?: string;
  avatar?: string;
  email?: string;
}

// Store state interface
interface UserState {
  // State
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: ProfileUpdateData) => void;
  clearError: () => void;
}

const useUserStore = create<UserState>((set, get) => ({
  // State
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  
  // Actions
  login: async () => {
    set({ loading: true, error: null });
    
    try {
      // API Call Simulation
      
      
      const userData: User = { id: '1', email: 'example@mail.com', name: 'luka', avatar: 'avatar', role: 'admin', createdAt: '2025' };
      
      

      set({ user: userData, isLoggedIn: true, loading: false, error: null });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Undifiend Error';
      set({ error: errorMessage, loading: false, isLoggedIn: false });
    }
  },
  
  logout: (): void => {
    set({ user: null, isLoggedIn: false, error: null });
    localStorage.removeItem('token');
  },
  
  updateProfile: (profileData: ProfileUpdateData): void => {
    // get() with that we are getting current state
    const currentUser = get().user;
    if (currentUser) {
      set({ user: { ...currentUser, ...profileData } });
    }
  },
  
  clearError: (): void => set({ error: null })
}));

export default useUserStore;
export type { User, ProfileUpdateData, UserState };