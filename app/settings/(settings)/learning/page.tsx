import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/back-button";

export default function LearningSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Learning Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your language learning experience.
        </p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Target Language</CardTitle>
          <CardDescription>
            Select the language you want to learn
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-1.5">
            <Label htmlFor="target-language">Learning Language</Label>
            <Select>
              <SelectTrigger id="target-language">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">Spanish 🇪🇸</SelectItem>
                <SelectItem value="fr">French 🇫🇷</SelectItem>
                <SelectItem value="de">German 🇩🇪</SelectItem>
                <SelectItem value="it">Italian 🇮🇹</SelectItem>
                <SelectItem value="pt">Portuguese 🇵🇹</SelectItem>
                <SelectItem value="ja">Japanese 🇯🇵</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="proficiency">Current Proficiency</Label>
            <Select>
              <SelectTrigger id="proficiency">
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Goals</CardTitle>
          <CardDescription>Set your daily learning targets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label>Minutes per day</Label>
            <Slider
              defaultValue={[30]}
              max={120}
              min={5}
              step={5}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground">
              Target: 30 minutes per day
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
