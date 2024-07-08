import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Date from "./datepicker";
import DropDown from "./dropdown";
import axios from "axios";
import { useState } from "react";
import Header from './Header'
export default function App() {
  const [product, setProduct] = useState("Select Product");
  const [date, setDate] = useState(null);
  const [numServers, setNumServers] = useState();
  const [infraHealth, setInfraHealth] = useState();
  const [webHealth, setWebHealth] = useState();

  const [totalCrits, setTotalCrits] = useState();

  const [critsBySre, setCritsBySre] = useState();
  const [mttrCritsBySre, setMttrCritsBySre] = useState();

  const [critsByOthers, setCritsByOthers] = useState();
  const [mttrCritsByOthers, setMttrCritsByOthers] = useState();


  const [totalAlerts, setTotalAlerts] = useState();
  const [reductionInAlerts, setReductionInAlerts] = useState();

  const [totalWarnings, setTotalWarnings] = useState();
  const [reductionInWarnings, setReductionInWarnings] = useState();


  const [cpuUtilization, setCpuUtilization] = useState("");
  const [memoryUtilization, setMemoryUtilization] = useState("");
  const [swapUsage, setSwapUsage] = useState("");
  const [diskUsage, setDiskUsage] = useState("");
  const [numCertificates, setNumCertificates] = useState("");
  // console.log("hii",product)
  const handleSubmit = async () => {
    try {
      

      
      const result = {
        "product_name": product,
        "info": {
          "crits": {
            "total_crits": Number(totalCrits),
            "crits_by_sre": Number(critsBySre),
            "mttr_by_sre": Number(mttrCritsBySre),
            "crits_by_nonsre": Number(critsByOthers),
            "mttr_by_nonsre": Number(mttrCritsByOthers)
          },
          "scom_alerts": {
            "total_critical": Number(totalAlerts),
            "total_warnings": Number(totalWarnings)
          },
          "Date": date,
          "number_of_servers": Number(numServers),
          "infra_health_coverage": Number(infraHealth),
          "web_health_coverage": Number(webHealth)
        }
      }
      const response = await axios.post("http://localhost:5000/addform", result);
      console.log("hii",result);
      alert("data added successfully")

      console.log('prooo ', product);
      window.location.reload();
      window.scroll(0,0)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div >
      <Header/>
    <div style={{ margin: '40px 40px 40px 40px' }} >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Product Selection */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label htmlFor="product">
              Select Product
            </Label>
            <DropDown product={product} setProduct={setProduct}/>
            {product}
          </div>
          {/* Date Picker */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label htmlFor="date">
              Date
            </Label>
            <Date date={date} setDate={setDate} />
          </div>
          {/* Observability Section */}
          <h1 style={{ fontSize: '20px' }}>
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
              Total Critics
            </Label>
            <Input
              id="totalCrits"
              type="text"
              placeholder="Total CRITS"
              value={totalCrits}
              onChange={e => setTotalCrits(e.target.value)}
              />
          </div>
          <div>
            <Label htmlFor="totalCrits">
              Crits Resolved By SRE
            </Label>
            <Input
              id="totalCritsBySre"
              type="text"
              placeholder="Resolved by Sre"
              value={critsBySre}
              onChange={e => setCritsBySre(e.target.value)}
              />
          </div>
          {/* MTTR */}
          <div>
            <Label htmlFor="mttrCrits">
              Mean Time To Resolve (by SRE)
            </Label>
            <Input
              id="mttrCrits"
              type="text"
              placeholder="MTTR by SRE"
              value={mttrCritsBySre}
              onChange={e => setMttrCritsBySre(e.target.value)}
              />
          </div>
          {/* crits by others */}
          <div>
            <Label htmlFor="totalCrits">
              Crits Resolved By Others
            </Label>
            <Input
              id="critsByOthers"
              type="text"
              placeholder="Resolved by Others"
              value={critsByOthers}
              onChange={e => setCritsByOthers(e.target.value)}
              />
          </div>
          {/* MTTR by others*/}
          <div>
            <Label htmlFor="mttrCrits">
              Mean Time To Resolve (by Others)
            </Label>
            <Input
              id="mttrCrits"
              type="text"
              placeholder="MTTR by SRE"
              value={mttrCritsByOthers}
              onChange={e => setMttrCritsByOthers(e.target.value)}
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
          {/* <div>
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
            </div> */}
          <div>
            <Label htmlFor="totalAlerts">
              Total SCOM Warnings
            </Label>
            <Input
              id="totalWarnings"
              type="text"
              placeholder="Total Alerts"
              value={totalWarnings}
              onChange={e => setTotalWarnings(e.target.value)}
            />
          </div>
          {/* % Reduction in Alerts */}
          {/* <div>
            <Label htmlFor="reductionInAlerts">
            % Reduction in Warnings
            </Label>
            <Input
              id="reductionInWarnings"
              type="text"
              placeholder="% Reduction"
              value={reductionInWarnings}
              onChange={e => setReductionInWarnings(e.target.value)}
            />
          </div> */}
          {/* Capacity Planning Section */}
          {/* <h1>
            Capacity Planning
          </h1> */}
          {/* CPU Utilization */}
          {/* <div>
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
              </div> */}
          {/* Memory Utilization */}
          {/* <div>
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
            </div> */}
          {/* Swap Usage */}
          {/* <div>
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
          {/* <div>
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
            </div>  */}
          {/* Certificate Monitoring */}
          {/* <h1>
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
            </div> */}
        </div>
        <div style={{textAlign:'center',marginTop:"15px"}}>
          <Button style={{backgroundColor:"#519DA5"}}onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
            </div>

  );
}
