import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { ChevronRight, LogOut, Moon, Sun } from "lucide-react";
import { Accessibility, Brain, GraduationCap, CircleUser } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <Link href="/settings/learning">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Manage your account settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CircleUser className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Update your profile and email settings
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
        <Link href="/settings/learning">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Learning Preferences</CardTitle>
              <CardDescription>
                Customize your learning experience
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Language goals and preferences
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/settings/ai">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>AI Interaction</CardTitle>
              <CardDescription>Customize your AI tutor</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  AI personality and response settings
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/settings/accessibility">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>Make Verba work better for you</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Accessibility className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Visual, motion, and audio preferences
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>Legal</CardTitle>
          <CardDescription>Important documents and licenses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <Link
              href="/legal/privacy"
              className="flex items-center justify-between rounded-lg border p-4 transition-all duration-300 hover:bg-accent"
            >
              <div className="space-y-0.5">
                <div className="text-sm font-medium">Privacy Policy</div>
                <div className="text-sm text-muted-foreground">
                  How we handle your data
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link
              href="/legal/terms"
              className="flex items-center justify-between rounded-lg border p-4 transition-all duration-300 hover:bg-accent"
            >
              <div className="space-y-0.5">
                <div className="text-sm font-medium">Terms of Service</div>
                <div className="text-sm text-muted-foreground">
                  Rules for using Verba
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link
              href="/legal/licenses"
              className="flex items-center justify-between rounded-lg border p-4 transition-all duration-300 hover:bg-accent"
            >
              <div className="space-y-0.5">
                <div className="text-sm font-medium">Licenses</div>
                <div className="text-sm text-muted-foreground">
                  Third-party software licenses
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Button variant="destructive" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
