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

export const GDSC_POSITIONS_ICONS = {
  student: GoPerson,
  alumni: PiStudent,
  mentor: GrUserWorker,
  leader: GrGroup,
  advisor: FaChalkboardTeacher,
  sponsor: GoSponsorTiers,
};

export const GDSC_BRANCHES = ["project", "interview", "marketing"] as const;

export const GDSC_BRANCHES_ICONS = {
  project: FaCode,
  interview: SiLeetcode,
  marketing: IoShareSocialOutline,
};

export const GDSC_BRANCH_DECSRIPTIONS = {
  project:
    "Collaborate on a variety of software applications and business solutions",
  interview:
    "Improve your technical skills to propel your chances of winning interviews",
  marketing:
    "Help outreach the community through networking and social media presence",
};

export const GDSC_POSITION_IOTA = {
  student: 1,
  alumni: 2,
  mentor: 3,
  leader: 4,
  advisor: 5,
  sponsor: 6,
};

export const GDSC_BRANCH_IOTA = {
  project: 1,
  interview: 2,
  marketing: 3,
};

export interface User {
  id: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  image?: string;
  password?: string;
  role?: "USER" | "ADMIN";
  position?: (typeof GDSC_POSITIONS)[number];
  branch?: (typeof GDSC_BRANCHES)[number];
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  discord?: string;
  bio?: string;
  tags: string[];
  website?: string;
  graduationDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  provider?: string;
  authId?: string;
  isOnboarded: boolean;
}

export interface GDSCUser {
  accessToken: string;
  user: GDSCUser;
}
