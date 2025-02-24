export interface Shops {
    _id: string;
    fullname?: string;
    profileImage?: string | null;
    googleId?: string | null;
    email?: string;
    phone?: string;
    accountMode: string;
    otpVerification: boolean;
    role: string;
    country?: string | null;
    city?: string | null;
    isBlocked: boolean;
    verificationDocuments: boolean;
    accountVerificationStatus: string;
    shopImage?: string | null;
    fcmToken?: string | null;
    is_online: boolean;
    last_seen?: string | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
    shopCategory: string;
    shopAddress?: string;
    shopName?: string;
    otp?: string | null;
  }
  