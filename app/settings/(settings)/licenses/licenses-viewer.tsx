"use client"

import * as React from "react"
import { ChevronRight, ExternalLink, Package } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

import licenses, {License}  from "./licenses"

export default function LicensesViewer() {
  const [selectedLicense, setSelectedLicense] = React.useState<License | null>(null)

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold mb-1">Open Source Licenses</h1>
        <p className="text-sm text-muted-foreground">
          Verba is built on the shoulders of giants. Here are the open source projects that make it possible.
        </p>
      </div>

      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {licenses.map((license) => (
          <motion.div
            key={license.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader className="pb-2 pt-3 px-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    <CardTitle className="text-base">{license.name}</CardTitle>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {license.creator} • {license.licenseType}
                  </span>
                </div>
                <CardDescription className="text-xs mt-1">{license.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3 px-4 pt-0">
                <div className="flex gap-2">
                  {license.repository && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-7 text-xs"
                      onClick={() => window.open(license.repository, '_blank')}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Repository
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full h-7 text-xs"
                    onClick={() => setSelectedLicense(license)}
                  >
                    <ChevronRight className="mr-1 h-3 w-3" />
                    License
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedLicense} onOpenChange={() => setSelectedLicense(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-lg">{selectedLicense?.name} License</DialogTitle>
            <DialogDescription className="text-sm">
              {selectedLicense?.licenseType} License • {selectedLicense?.creator} • {selectedLicense?.year}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[50vh]">
            {selectedLicense?.licenseText ? (
              <pre className="whitespace-pre-wrap p-3 text-xs">
                {selectedLicense.licenseText}
              </pre>
            ) : (
              <div className="p-3">
                <p className="text-sm text-muted-foreground">
                  View the full license at:{" "}
                  <a
                    href={selectedLicense?.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {selectedLicense?.licenseUrl}
                  </a>
                </p>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

