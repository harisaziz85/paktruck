export interface User {
    message: string;
    type: string;
    _id: string;
    fullname: string;
    email: string;
    profileImage?: string | null;
    role: string;
    accountMode: 'individual' | 'shop';
    shopName?: string;
    shopAddress?: string;
    last_seen: Date;
    isActive: boolean;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AuthResponse {
    message: string;
    token: string;
    user: User;
    otp: string;
  }
  
  // **User Verification Response**
  export interface VerificationResponse {
    status: string;
    message: string;
    data: {
      accountVerificationStatus: string;
      fullname: string;
      email: string;
      phone: string;
      idCardFrontImage: string;
      idCardBackImage: string;
    };
  }
  