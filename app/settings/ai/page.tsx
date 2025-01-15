import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { BackButton } from "@/components/back-button"

export default function AISettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">AI Interaction</h3>
        <p className="text-sm text-muted-foreground">
          Customize how the AI tutor interacts with you.
        </p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Conversation Style</CardTitle>
          <CardDescription>
            Choose how you'd like the AI to communicate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="friendly" className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="formal" id="formal" />
              <Label htmlFor="formal">Formal and Professional</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="friendly" id="friendly" />
              <Label htmlFor="friendly">Friendly and Casual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="encouraging" id="encouraging" />
              <Label htmlFor="encouraging">Encouraging and Supportive</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Response Length</CardTitle>
          <CardDescription>
            Adjust how detailed you want the AI's responses to be
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label>Response Detail Level</Label>
            <Slider
              defaultValue={[2]}
              max={3}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="grid grid-cols-3 text-sm">
              <div>Concise</div>
              <div className="text-center">Balanced</div>
              <div className="text-right">Detailed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Voice Settings</CardTitle>
          <CardDescription>
            Configure the AI's speaking voice
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-1.5">
            <Label htmlFor="voice">Voice Selection</Label>
            <Select>
              <SelectTrigger id="voice">
                <SelectValue placeholder="Select a voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="voice1">Sofia (Female)</SelectItem>
                <SelectItem value="voice2">Marco (Male)</SelectItem>
                <SelectItem value="voice3">Ana (Female)</SelectItem>
                <SelectItem value="voice4">Carlos (Male)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

