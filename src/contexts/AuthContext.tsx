import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  studentId: string;
  email: string;
}

interface Vendor {
  vendorId: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  vendor: Vendor | null;
  loginStudent: (user: User) => void;
  loginVendor: (vendor: Vendor) => void;
  logout: () => void;
  isStudent: boolean;
  isVendor: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('student');
    return saved ? JSON.parse(saved) : null;
  });

  const [vendor, setVendor] = useState<Vendor | null>(() => {
    const saved = localStorage.getItem('vendor');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('student', JSON.stringify(user));
    } else {
      localStorage.removeItem('student');
    }
  }, [user]);

  useEffect(() => {
    if (vendor) {
      localStorage.setItem('vendor', JSON.stringify(vendor));
    } else {
      localStorage.removeItem('vendor');
    }
  }, [vendor]);

  const loginStudent = (userData: User) => {
    setUser(userData);
    setVendor(null);
  };

  const loginVendor = (vendorData: Vendor) => {
    setVendor(vendorData);
    setUser(null);
  };

  const logout = () => {
    setUser(null);
    setVendor(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        vendor,
        loginStudent,
        loginVendor,
        logout,
        isStudent: !!user,
        isVendor: !!vendor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
