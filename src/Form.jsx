import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Date from "./datepicker";
import { ThemeProvider } from "@/components/theme-provider";
import DropDown from "./dropdown";
import axios from "axios";
import { useState } from "react";

export default function App() {
  // State variables for each input field
  const [product, setProduct] = useState("");
  const [date, setDate] = useState(null);
  const [numServers, setNumServers] = useState("");
  const [infraHealth, setInfraHealth] = useState("");
  const [webHealth, setWebHealth] = useState("");
  const [totalCrits, setTotalCrits] = useState("");
  const [mttrCrits, setMttrCrits] = useState("");
  const [critsAvoided, setCritsAvoided] = useState("");
  const [totalAlerts, setTotalAlerts] = useState("");
  const [reductionInAlerts, setReductionInAlerts] = useState("");
  const [cpuUtilization, setCpuUtilization] = useState("");
  const [memoryUtilization, setMemoryUtilization] = useState("");
  const [swapUsage, setSwapUsage] = useState("");
  const [diskUsage, setDiskUsage] = useState("");
  const [numCertificates, setNumCertificates] = useState("");

  const handleSubmit = async () => {
    try {
      const form = new FormData();
      form.append("product", product);
      form.append("date", date);
      form.append("numServers", numServers);
      form.append("infraHealth", infraHealth);
      form.append("webHealth", webHealth);
      form.append("totalCrits", totalCrits);
      form.append("mttrCrits", mttrCrits);
      form.append("critsAvoided", critsAvoided);
      form.append("totalAlerts", totalAlerts);
      form.append("reductionInAlerts", reductionInAlerts);
      form.append("cpuUtilization", cpuUtilization);
      form.append("memoryUtilization", memoryUtilization);
      form.append("swapUsage", swapUsage);
      form.append("diskUsage", diskUsage);
      form.append("numCertificates", numCertificates);

      const response = await axios.post("http://localhost:3000", form);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    
      <div style={{margin:'40px 40px 40px 40px'}} >
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            {/* Product Selection */}
            <div>
              <Label htmlFor="product">
                Select Product
              </Label>
              <DropDown value={product} onChange={e => setProduct(e.target.value)} />
            </div>
            {/* Date Picker */}
            <div>
              <Label htmlFor="date">
                Date
              </Label>
              <Date value={date} onChange={setDate} />
            </div>
            {/* Observability Section */}
            <h1 style={{fontSize:'20px'}}>
              Observability
            </h1>
            
            {/* Number of Servers */}
            <div>
              <Label htmlFor="numServers">
                Number of Servers
              </Label>
              <Input
                id="numServers"
                type="text"
                placeholder="Number of Servers"
                value={numServers}
                onChange={e => setNumServers(e.target.value)}
              />
            </div>
            {/* Infra Health Coverage */}
            <div>
              <Label htmlFor="infraHealth">
                Infra Health Coverage
              </Label>
              <Input
                id="infraHealth"
                type="text"
                placeholder="Infra Health Coverage"
                value={infraHealth}
                onChange={e => setInfraHealth(e.target.value)}
              />
            </div>
            {/* Web Health Coverage */}
            <div>
              <Label htmlFor="webHealth">
                Web Health Coverage
              </Label>
              <Input
                id="webHealth"
                type="text"
                placeholder="Web Health Coverage"
                value={webHealth}
                onChange={e => setWebHealth(e.target.value)}
              />
            </div>
            <h1>
              CRITS
            </h1>
            {/* Total CRITS */}
            <div>
              <Label htmlFor="totalCrits">
                Total Critical Incidents (CRITS)
              </Label>
              <Input
                id="totalCrits"
                type="text"
                placeholder="Total CRITS"
                value={totalCrits}
                onChange={e => setTotalCrits(e.target.value)}
              />
            </div>
            {/* MTTR */}
            <div>
              <Label htmlFor="mttrCrits">
                Mean Time to Recovery (MTTR)
              </Label>
              <Input
                id="mttrCrits"
                type="text"
                placeholder="MTTR"
                value={mttrCrits}
                onChange={e => setMttrCrits(e.target.value)}
              />
            </div>
            {/* Crits Avoided */}
            <div>
              <Label htmlFor="critsAvoided">
                Critical Incidents Avoided
              </Label>
              <Input
                id="critsAvoided"
                type="text"
                placeholder="Crits Avoided"
                value={critsAvoided}
                onChange={e => setCritsAvoided(e.target.value)}
              />
            </div>
            {/* SCOM Alerts */}
            <h1>
              SCOM Alerts
            </h1>
            <div>
              <Label htmlFor="totalAlerts">
                Total SCOM Alerts
              </Label>
              <Input
                id="totalAlerts"
                type="text"
                placeholder="Total Alerts"
                value={totalAlerts}
                onChange={e => setTotalAlerts(e.target.value)}
              />
            </div>
            {/* % Reduction in Alerts */}
            <div>
              <Label htmlFor="reductionInAlerts">
                % Reduction in Alerts
              </Label>
              <Input
                id="reductionInAlerts"
                type="text"
                placeholder="% Reduction"
                value={reductionInAlerts}
                onChange={e => setReductionInAlerts(e.target.value)}
              />
            </div>
            {/* Capacity Planning Section */}
            <h1>
              Capacity Planning
            </h1>
            {/* CPU Utilization */}
            <div>
              <Label htmlFor="cpuUtilization">
                CPU Utilization
              </Label>
              <Input
                id="cpuUtilization"
                type="text"
                placeholder="CPU Utilization"
                value={cpuUtilization}
                onChange={e => setCpuUtilization(e.target.value)}
              />
            </div>
            {/* Memory Utilization */}
            <div>
              <Label htmlFor="memoryUtilization">
                Memory Utilization
              </Label>
              <Input
                id="memoryUtilization"
                type="text"
                placeholder="Memory Utilization"
                value={memoryUtilization}
                onChange={e => setMemoryUtilization(e.target.value)}
              />
            </div>
            {/* Swap Usage */}
            <div>
              <Label htmlFor="swapUsage">
                Swap Usage
              </Label>
              <Input
                id="swapUsage"
                type="text"
                placeholder="Swap Usage"
                value={swapUsage}
                onChange={e => setSwapUsage(e.target.value)}
              />
            </div>
            {/* Disk Usage */}
            <div>
              <Label htmlFor="diskUsage">
                Disk Usage
              </Label>
              <Input
                id="diskUsage"
                type="text"
                placeholder="Disk Usage"
                value={diskUsage}
                onChange={e => setDiskUsage(e.target.value)}
              />
            </div>
            {/* Certificate Monitoring */}
            <h1>
              Certificates
            </h1>
            <div>
              <Label htmlFor="numCertificates">
                Number of Certificates Monitored
              </Label>
              <Input
                id="numCertificates"
                type="text"
                placeholder="Number of Certificates Monitored"
                value={numCertificates}
                onChange={e => setNumCertificates(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    
  );
}
