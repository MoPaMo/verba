import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { BackButton } from "@/components/back-button"

export default function AccessibilitySettingsPage() {
  return (
    <div className="space-y-6">
      <BackButton />
      <div>
        <h3 className="text-lg font-medium">Accessibility</h3>
        <p className="text-sm text-muted-foreground">
          Make Verba work better for you.
        </p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Visual Preferences</CardTitle>
          <CardDescription>
            Adjust how content appears on screen
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Font Size</Label>
            <Slider
              defaultValue={[16]}
              max={24}
              min={12}
              step={1}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground">
              Current size: 16px
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast">High Contrast Mode</Label>
            <Switch id="high-contrast" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion">Reduce Motion</Label>
            <Switch id="reduce-motion" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audio & Speech</CardTitle>
          <CardDescription>
            Configure sound and speech settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="screen-reader">Screen Reader Optimization</Label>
            <Switch id="screen-reader" />
          </div>

          <div className="space-y-4">
            <Label>Speech Rate</Label>
            <Slider
              defaultValue={[1]}
              max={2}
              min={0.5}
              step={0.1}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground">
              Current speed: 1x
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

