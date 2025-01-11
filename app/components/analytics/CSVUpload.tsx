'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import Papa from 'papaparse'

const sampleData = [
  { postid: '1', posttype: 'Static', postedat: '2024-03-01T09:00:00', likes: 1200, comments: 45, shares: 30, saves: 20, captionlength: 150, hashtagscount: 5, posthour: 9, totalengagement: 1295, engagementrate: 4.2 },
  { postid: '2', posttype: 'Carousel', postedat: '2024-03-02T14:30:00', likes: 2500, comments: 120, shares: 80, saves: 45, captionlength: 200, hashtagscount: 7, posthour: 14, totalengagement: 2745, engagementrate: 6.8 },
  { postid: '3', posttype: 'Reel', postedat: '2024-03-03T11:15:00', likes: 3500, comments: 200, shares: 150, saves: 75, captionlength: 160, hashtagscount: 8, posthour: 11, totalengagement: 3925, engagementrate: 8.9 },
  { postid: '4', posttype: 'Static', postedat: '2024-03-04T16:45:00', likes: 950, comments: 35, shares: 20, saves: 15, captionlength: 140, hashtagscount: 4, posthour: 16, totalengagement: 1020, engagementrate: 3.8 },
  { postid: '5', posttype: 'Carousel', postedat: '2024-03-05T10:30:00', likes: 1800, comments: 65, shares: 40, saves: 25, captionlength: 180, hashtagscount: 6, posthour: 10, totalengagement: 1930, engagementrate: 5.1 },
  { postid: '6', posttype: 'Reel', postedat: '2024-03-06T13:00:00', likes: 4000, comments: 250, shares: 180, saves: 100, captionlength: 170, hashtagscount: 9, posthour: 13, totalengagement: 4530, engagementrate: 10.2 },
  { postid: '7', posttype: 'Static', postedat: '2024-03-07T08:45:00', likes: 1100, comments: 40, shares: 25, saves: 18, captionlength: 145, hashtagscount: 5, posthour: 8, totalengagement: 1183, engagementrate: 4.0 },
  { postid: '8', posttype: 'Carousel', postedat: '2024-03-08T15:20:00', likes: 2200, comments: 100, shares: 70, saves: 40, captionlength: 190, hashtagscount: 7, posthour: 15, totalengagement: 2410, engagementrate: 6.0 },
  { postid: '9', posttype: 'Reel', postedat: '2024-03-09T12:10:00', likes: 3800, comments: 220, shares: 160, saves: 85, captionlength: 165, hashtagscount: 8, posthour: 12, totalengagement: 4265, engagementrate: 9.5 },
  { postid: '10', posttype: 'Static', postedat: '2024-03-10T17:30:00', likes: 1000, comments: 38, shares: 22, saves: 16, captionlength: 135, hashtagscount: 4, posthour: 17, totalengagement: 1076, engagementrate: 3.9 },
];

interface CSVUploadProps {
  onDataLoaded: (data: any[]) => void
}

export default function CSVUpload({ onDataLoaded }: CSVUploadProps) {
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Load default data on component mount
  useEffect(() => {
    loadDefaultData();
  }, [])

  const loadDefaultData = () => {
    setIsLoading(true);
    // Use the sample data directly
    onDataLoaded(sampleData);
    setIsLoading(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsLoading(true)
      Papa.parse(file, {
        complete: (result) => {
          onDataLoaded(result.data)
          setIsLoading(false)
        },
        header: true,
        dynamicTyping: true,
      })
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex gap-2">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <Button
        variant="outline"
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        <Upload className="h-4 w-4 mr-2" />
        {isLoading ? 'Loading...' : 'Upload CSV'}
      </Button>
      <Button
        variant="secondary"
        onClick={loadDefaultData}
        disabled={isLoading}
      >
        Load Sample Data
      </Button>
    </div>
  )
}

