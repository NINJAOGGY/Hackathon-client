import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Droplets, Wind } from "lucide-react"

const predictions = [
  { type: "Flood", risk: "High", icon: Droplets },
  { type: "Earthquake", risk: "Low", icon: AlertTriangle },
  { type: "Hurricane", risk: "Moderate", icon: Wind },
]

export default function DisasterPrediction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Disaster Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {predictions.map((prediction) => (
            <li key={prediction.type} className="flex items-center justify-between">
              <div className="flex items-center">
                <prediction.icon className="mr-2 h-5 w-5" />
                <span>{prediction.type}</span>
              </div>
              <span
                className={`font-bold ${prediction.risk === "High" ? "text-red-500" : prediction.risk === "Moderate" ? "text-yellow-500" : "text-green-500"}`}
              >
                {prediction.risk}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
