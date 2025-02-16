import { PiStudent } from "react-icons/pi";
import { GrGroup, GrUserWorker } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoPerson, GoSponsorTiers } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoShareSocialOutline } from "react-icons/io5";

export const GDSC_POSITIONS = [
  "student",
  "alumni",
  "mentor",
  "leader",
  "advisor",
  "sponsor",
] as const;

export const GDSC_POSITIONS_SELECTABLE = GDSC_POSITIONS.filter(
  (position) => position !== "leader"
);

export const GDSC_POSITIONS_WITH_GRAD_DATE = [
  "student",
  "alumni",
  "leader",
] as const;

export const GDSC_POSITIONS_ICONS: Record<
  (typeof GDSC_POSITIONS)[number],
  React.ComponentType
> = {
  student: GoPerson,
  alumni: PiStudent,
  mentor: GrUserWorker,
  leader: GrGroup,
  advisor: FaChalkboardTeacher,
  sponsor: GoSponsorTiers,
};

export const GDSC_BRANCHES = ["project", "interview", "marketing"] as const;

export const GDSC_BRANCHES_ICONS: Record<
  (typeof GDSC_BRANCHES)[number],
  React.ComponentType
> = {
  project: FaCode,
  interview: SiLeetcode,
  marketing: IoShareSocialOutline,
};

export const GDSC_BRANCH_DESCRIPTIONS: Record<
  (typeof GDSC_BRANCHES)[number],
  string
> = {
  project:
    "Collaborate on a variety of software applications and business solutions",
  interview:
    "Improve your technical skills to propel your chances of winning interviews",
  marketing:
    "Help outreach the community through networking and social media presence",
};

// Convert the array to an object of switchable iota
export const GDSC_POSITION_IOTA = Object.fromEntries(
  GDSC_POSITIONS.map((pos, index) => [pos, index + 1])
) as Record<(typeof GDSC_POSITIONS)[number], number>;

export const IOTA_TO_GDSC_POSITION = Object.fromEntries(
  Object.entries(GDSC_POSITION_IOTA).map(([key, value]) => [value, key])
) as Record<number, (typeof GDSC_POSITIONS)[number]>;

export const GDSC_BRANCH_IOTA = Object.fromEntries(
  GDSC_BRANCHES.map((branch, index) => [branch, index + 1])
) as Record<(typeof GDSC_BRANCHES)[number], number>;

export const IOTA_TO_GDSC_BRANCH = Object.fromEntries(
  Object.entries(GDSC_BRANCH_IOTA).map(([key, value]) => [value, key])
) as Record<number, (typeof GDSC_BRANCHES)[number]>;

export interface User {
  id: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  image?: string;
  password?: string;
  role?: "USER" | "ADMIN";
  position?: keyof typeof IOTA_TO_GDSC_POSITION;
  branch?: keyof typeof IOTA_TO_GDSC_BRANCH;
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  discord?: string;
  bio?: string;
  tags: string[];
  website?: string;
  graduation_date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  provider?: string;
  authId?: string;
  is_onboarded: boolean;
}

export interface UserLoginAPIResponse {
  accessToken: string;
  user: User;
}

export type UserSignUpAPIResponse = User;
