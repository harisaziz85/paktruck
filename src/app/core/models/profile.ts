export interface Profile {
    _id: string;
    fullname: string;
    profileImage: string | null;
    googleId: string | null;
    email: string;
    accountMode: string;
    otpVerification: boolean;
    role: string;
    country: string | null;
    city: string | null;
    isActive: boolean;
    isBlocked: boolean;
    verificationDocuments: boolean;
    isAccountModeVerified: boolean;
    idCardFrontImage: string | null;
    idCardBackImage: string | null;
    shopImage: string | null;
    fcmToken: string | null;
    is_online: boolean;
    favorites: any[];
    last_seen: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
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
  