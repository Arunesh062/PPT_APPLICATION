import React, { useState } from 'react';
import Card from '../components/Card';
import { Smartphone, Upload, Bot, Sprout, Tractor, LineChart } from 'lucide-react';

const Application = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const applications = [
    { title: 'Precision Agriculture', icon: Target, desc: 'Enables targeted application of pesticides, reducing chemical usage and costs.' },
    { title: 'Farmer Support System', icon: Smartphone, desc: 'Accessible mobile solution for farmers lacking immediate expert agricultural advice.' },
    { title: 'Smart Farming Integration', icon: Tractor, desc: 'Can be integrated into drone systems for automated large-scale field monitoring.' },
    { title: 'Crop Yield Improvement', icon: LineChart, desc: 'Early detection prevents disease spread, securing harvest quality and quantity.' },
  ];

  // Using a separate icon object since Target was not imported directly in the array definition above
  // Fixing the icons mapping:
  const iconMap = [Sprout, Smartphone, Tractor, LineChart];

  const handleDemoUpload = (e) => {
    e.preventDefault();
    setIsPredicting(true);
    setPrediction(null);
    
    // Simulate network request
    setTimeout(() => {
      setIsPredicting(false);
      setPrediction({
        disease: 'Papaya Ringspot Virus',
        confidence: 98.4,
        recommendation: "1. Uproot and burn severely infected plants immediately.\n2. Control aphid vectors using Neem oil (5ml/L) or Imidacloprid (0.5ml/L).\n3. Avoid planting cucurbits (melons, pumpkins) near the papaya orchard."
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Real-World Application</h1>
        <p className="text-slate-500 mt-1">Impact and interactive demonstration of the system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {applications.map((app, idx) => {
          const Icon = iconMap[idx];
          return (
            <Card key={idx} className="hover:border-emerald-200 transition-colors">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800">{app.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{app.desc}</p>
            </Card>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-4">Interactive Demo (Static)</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="1. Image Upload">
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer" onClick={handleDemoUpload}>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-emerald-500 mb-4">
              <Upload size={28} />
            </div>
            <h4 className="font-semibold text-slate-800">Click to run demo simulation</h4>
            <p className="text-sm text-slate-500 mt-2">No real file needed. Click anywhere in this box to simulate an upload and prediction.</p>
          </div>
        </Card>

        <Card title="2. System Output" className="relative overflow-hidden">
          {isPredicting && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 font-medium text-slate-600 animate-pulse">Running ConvNeXt inference...</p>
            </div>
          )}

          {!prediction && !isPredicting && (
            <div className="h-full min-h-[200px] flex items-center justify-center text-slate-400">
              <p>Upload an image to see results</p>
            </div>
          )}

          {prediction && !isPredicting && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between p-4 bg-red-50 text-red-800 rounded-lg border border-red-100">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">Detected Disease</p>
                  <h4 className="text-lg font-bold">{prediction.disease}</h4>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">Confidence</p>
                  <h4 className="text-lg font-bold">{prediction.confidence}%</h4>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-5 border border-slate-800 shadow-inner">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 border-b border-slate-800 pb-3">
                  <Bot size={20} />
                  <h4 className="font-semibold">LLM Treatment Recommendation</h4>
                </div>
                <div className="text-slate-300 text-sm font-mono whitespace-pre-line leading-relaxed">
                  {prediction.recommendation}
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Application;
