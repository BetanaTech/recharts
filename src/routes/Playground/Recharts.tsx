import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import fundData from './data';

export default function Recharts() {
  let startDate: number = new Date().getTime();
  let convertedFundData = [];
  for (let i: number = 0; i < fundData.length; i++) {
    startDate = Math.min(startDate, new Date(fundData[i].date).getTime());
    convertedFundData.push({
      ...fundData[i],
      date: new Date(fundData[i].date).getTime(),
      netAssetValue: parseInt(fundData[i].netAssetValue.replace(/,/g, ''), 10),
    });
  }

  const startYear: number = new Date(startDate).getFullYear();
  const presentYear: number = new Date().getFullYear();
  const xAxisTicks: number[] = [];
  for (let year: number = startYear; year < presentYear + 1; year++) {
    if (new Date(year + '/1/1').getTime() >= startDate) {
      xAxisTicks.push(new Date(year + '/1/1').getTime());
    }
  }

  return (
    <div>
      <h2>Recharts</h2>
      <div style={{ width: '100%', height: '500px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={400} height={400} data={convertedFundData}>
            <CartesianGrid />
            <XAxis
              dataKey="date"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(unixTime: number) => new Date(unixTime).toLocaleDateString()}
              ticks={xAxisTicks}
              type="number"
            />
            <YAxis
              dataKey="netAssetValue"
              domain={[
                (dataMin: number) => Math.floor(dataMin / 1000) * 1000,
                (dataMax: number) => Math.ceil(dataMax / 1000) * 1000,
              ]}
              axisLine={false}
              type="number"
            />
            <Line type="linear" dataKey="netAssetValue" stroke="#ff28d8" dot={false} unit="円" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
