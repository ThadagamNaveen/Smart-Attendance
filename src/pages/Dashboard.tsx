import
{
  useEffect,
  useState
} from "react";
import {
  useNavigate
} from "react-router-dom";
import {
  supabase
} from "@/integrations/supabase/client";
import {
  Button
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  toast
} from "sonner";
import {
  Loader2,
  MapPin,
  Camera,
  Mic,
  LogOut,
  Calendar,
  CheckCircle2
} from "lucide-react";
import AttendanceCamera from "@/components/AttendanceCamera";
import AttendanceRecords from "@/components/AttendanceRecords";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState<any>(null);
  const [locationValid, setLocationValid] = useState(false);
  const [currentStep, setCurrentStep] = useState<"location" | "camera" | "voice" | "complete">("location");
  const [showCamera, setShowCamera] = useState(false);

  // College coordinates (example: set your college location)
  const COLLEGE_LAT = 17.331229; // Example: Delhi
  const COLLEGE_LON = 78.298739;
