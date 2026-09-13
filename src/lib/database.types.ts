/**
 * Hand-written types for the EXISTING SkillSwap Supabase schema.
 *
 * Tables: profiles, skills, user_skills, swap_requests, ratings, notifications.
 * Once the Supabase project is connected these can be replaced by generated
 * types, but the shapes below mirror the described schema.
 */

export type UserRole = "user" | "admin";
export type SkillType = "offered" | "wanted";
export type DbSkillType = "OFFER" | "WANT";

export type ProfileRow = {
  id: string;
  name: string | null;
  email: string | null;
  profile_photo: string | null;
  location: string | null;
  bio: string | null;
  availability: string | null;
  is_public: boolean | null;
  role: string | null;
  rating: number | null;
  created_at: string;
}
export type ProfileInsert = Partial<ProfileRow> & { id: string };
export type ProfileUpdate = Partial<ProfileRow>;

export type SkillRow = {
  id: number;
  name: string;
  category: string | null;
  created_at?: string | null;
}
export type SkillInsert = Partial<SkillRow> & { name: string };
export type SkillUpdate = Partial<SkillRow>;

export type UserSkillRow = {
  id: number;
  user_id: string;
  skill_id: number;
  type: DbSkillType;
  level: string | null;
  created_at?: string | null;
}


export type UserSkillInsert = Partial<UserSkillRow> & {
  user_id: string;
  skill_id: number;
  type: DbSkillType;
};

export type UserSkillUpdate = Partial<UserSkillRow>;

export type SwapRequestRow = {
  id: number;
  sender_id: string;
  receiver_id: string;
  offered_skill_id: number | null;
  wanted_skill_id: number | null;
  status: string;
  message: string | null;
  created_at: string;
}

export type RatingRow = {
  id: number;
  swap_id: number | null;
  rater_id: string;
  rated_user_id: string;
  rating: number;
  feedback: string | null;
  created_at: string;
}

export type NotificationRow = {
  id: number;
  user_id: string;
  title: string | null;
  message: string | null;
  type: string | null;
  is_read: boolean | null;
  created_at: string;
}

type Table<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      profiles: Table<ProfileRow, ProfileInsert, ProfileUpdate>;
      skills: Table<SkillRow, SkillInsert, SkillUpdate>;
      user_skills: Table<UserSkillRow, UserSkillInsert, UserSkillUpdate>;
      swap_requests: Table<SwapRequestRow>;
      ratings: Table<RatingRow>;
      notifications: Table<NotificationRow>;
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

/** A user_skills row joined with its skill. */
export type UserSkillWithSkill = UserSkillRow & {
  skill: SkillRow | null;
}
