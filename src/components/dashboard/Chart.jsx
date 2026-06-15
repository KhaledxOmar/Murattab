'use client';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";
import { FaBars } from "react-icons/fa";

const productSales = [
  {
    name: 'Jan',
    subscriptions: 600
  },
  {
    name: 'Feb',
    subscriptions: 400
  },
  {
    name: 'Mar',
    subscriptions: 300
  },
  {
    name: 'Apr',
    subscriptions: 1000
  },
  {
    name: 'May',
    subscriptions: 800
  },
  
  
]

function Chart({ onMenuClick }) {

    return(
      <div className="w-full">
        {/* يظهر فقط في الموبايل */}
        <FaBars 
          onClick={onMenuClick}
          className="hidden max-[800px]:block text-2xl text-primary-color cursor-pointer mb-3"
        />
        <p className="text-xl font-bold py-1 mb-8">أهلا خالد، لوحة التحكم</p>
  
        <div dir="ltr" className="w-full bg-white px-8 py-8 rounded-xl mt-6">
          <div className="text-right mb-9">
            <p className="text-lg font-bold text-gray-800">المبيعات خلال الأسبوع</p>
            <p className="text-sm text-gray-400">تتبع أداء دوراتك والإيرادات اليومية</p>
          </div>

            {/* Chart */}
            <div dir="ltr" style={{ width: '100%', height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={productSales}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorProduct" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6d8c4e" stopOpacity={1} />
                      <stop offset="95%" stopColor="#6d8c4e" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickMargin={10}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6d8c4e', fontSize: 13 }}
                  />
                  <YAxis
                    width={45}
                    tickMargin={8}
                    axisLine={false}
                    tickLine={false}
                    tickCount={5}
                    tick={{ fill: '#6d8c4e', fontSize: 13 }}
                    domain={[0, 'auto']}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '10px',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      fontSize: 13,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="subscriptions"
                    stroke="#6d8c4e"
                    strokeWidth={2}
                    fill="url(#colorProduct)"
                    dot={{ r: 4, fill: '#6d8c4e', strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>
        
    )
}
export default Chart