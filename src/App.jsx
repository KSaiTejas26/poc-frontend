import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Date from "./datepicker";
import { ThemeProvider } from "@/components/theme-provider";
import DropDown from "./dropdown";
import axios from "axios";
import { useState } from "react";
import Form from './Form'
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
    // <ThemeProvider  >
    //   <div className="flex flex-col mt-20 justify-center items-center h-screen">
    //     <div className="w-full max-w-md">
    //       <div className="space-y-4">
    //         {/* Product Selection */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="product" className="dark:text-white mr-5">
    //             Select Product
    //           </Label>
    //           <DropDown value={product} onChange={e => setProduct(e.target.value)} />
    //         </div>
    //         {/* Date Picker */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="date" className="dark:text-white mr-5">
    //             Date
    //           </Label>
    //           <Date value={date} onChange={setDate} />
    //         </div>
    //         {/* Observability Section */}
    //         <h1 className="text-xl font-bold dark:text-white mb-5 text-center">
    //           Observability
    //         </h1>
    //         {/* Number of Servers */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="numServers" className="dark:text-white mr-5">
    //             Number of Servers
    //           </Label>
    //           <Input
    //             id="numServers"
    //             type="text"
    //             placeholder="Number of Servers"
    //             value={numServers}
    //             onChange={e => setNumServers(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Infra Health Coverage */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="infraHealth" className="dark:text-white mr-5">
    //             Infra Health Coverage
    //           </Label>
    //           <Input
    //             id="infraHealth"
    //             type="text"
    //             placeholder="Infra Health Coverage"
    //             value={infraHealth}
    //             onChange={e => setInfraHealth(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Web Health Coverage */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="webHealth" className="dark:text-white mr-5">
    //             Web Health Coverage
    //           </Label>
    //           <Input
    //             id="webHealth"
    //             type="text"
    //             placeholder="Web Health Coverage"
    //             value={webHealth}
    //             onChange={e => setWebHealth(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         <h1 className="text-xl font-bold dark:text-white mb-5 text-center">
    //           CRITS
    //         </h1>
    //         {/* Total CRITS */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="totalCrits" className="dark:text-white mr-5">
    //             Total Critical Incidents (CRITS)
    //           </Label>
    //           <Input
    //             id="totalCrits"
    //             type="text"
    //             placeholder="Total CRITS"
    //             value={totalCrits}
    //             onChange={e => setTotalCrits(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* MTTR */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="mttrCrits" className="dark:text-white mr-5">
    //             Mean Time to Recovery (MTTR)
    //           </Label>
    //           <Input
    //             id="mttrCrits"
    //             type="text"
    //             placeholder="MTTR"
    //             value={mttrCrits}
    //             onChange={e => setMttrCrits(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Crits Avoided */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="critsAvoided" className="dark:text-white mr-5">
    //             Critical Incidents Avoided
    //           </Label>
    //           <Input
    //             id="critsAvoided"
    //             type="text"
    //             placeholder="Crits Avoided"
    //             value={critsAvoided}
    //             onChange={e => setCritsAvoided(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* SCOM Alerts */}
    //         <h1 className="text-xl font-bold dark:text-white mb-5 text-center">
    //           SCOM Alerts
    //         </h1>
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="totalAlerts" className="dark:text-white mr-5">
    //             Total SCOM Alerts
    //           </Label>
    //           <Input
    //             id="totalAlerts"
    //             type="text"
    //             placeholder="Total Alerts"
    //             value={totalAlerts}
    //             onChange={e => setTotalAlerts(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* % Reduction in Alerts */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="reductionInAlerts" className="dark:text-white mr-5">
    //             % Reduction in Alerts
    //           </Label>
    //           <Input
    //             id="reductionInAlerts"
    //             type="text"
    //             placeholder="% Reduction"
    //             value={reductionInAlerts}
    //             onChange={e => setReductionInAlerts(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Capacity Planning Section */}
    //         <h1 className="text-xl mt-4 font-bold dark:text-white mb-5 text-center">
    //           Capacity Planning
    //         </h1>
    //         {/* CPU Utilization */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="cpuUtilization" className="dark:text-white mr-5">
    //             CPU Utilization
    //           </Label>
    //           <Input
    //             id="cpuUtilization"
    //             type="text"
    //             placeholder="CPU Utilization"
    //             value={cpuUtilization}
    //             onChange={e => setCpuUtilization(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Memory Utilization */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="memoryUtilization" className="dark:text-white mr-5">
    //             Memory Utilization
    //           </Label>
    //           <Input
    //             id="memoryUtilization"
    //             type="text"
    //             placeholder="Memory Utilization"
    //             value={memoryUtilization}
    //             onChange={e => setMemoryUtilization(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Swap Usage */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="swapUsage" className="dark:text-white mr-5">
    //             Swap Usage
    //           </Label>
    //           <Input
    //             id="swapUsage"
    //             type="text"
    //             placeholder="Swap Usage"
    //             value={swapUsage}
    //             onChange={e => setSwapUsage(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Disk Usage */}
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="diskUsage" className="dark:text-white mr-5">
    //             Disk Usage
    //           </Label>
    //           <Input
    //             id="diskUsage"
    //             type="text"
    //             placeholder="Disk Usage"
    //             value={diskUsage}
    //             onChange={e => setDiskUsage(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //         {/* Certificate Monitoring */}
    //         <h1 className="text-xl font-bold dark:text-white mb-5 text-center">
    //           Certificates
    //         </h1>
    //         <div className="flex justify-center items-center">
    //           <Label htmlFor="numCertificates" className="dark:text-white mr-5">
    //             Number of Certificates Monitored
    //           </Label>
    //           <Input
    //             id="numCertificates"
    //             type="text"
    //             placeholder="Number of Certificates Monitored"
    //             value={numCertificates}
    //             onChange={e => setNumCertificates(e.target.value)}
    //             className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex justify-center mt-5">
    //         <Button
    //           className="dark:bg-white-700 dark:text-black"
    //           onClick={handleSubmit}
    //         >
    //           Submit
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </ThemeProvider>
    <Form/>
  );
}
