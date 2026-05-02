import React from 'react';
import Card from '../components/Card';
import { CheckCircle, Award, Globe, Leaf } from 'lucide-react';

const Conclusion = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Conclusion</h1>
        <p className="text-slate-500 mt-1">Project summary and future scope</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-emerald-600 text-white border-none col-span-1 lg:col-span-2 shadow-lg shadow-emerald-500/20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award size={28} />
            Project Success
          </h2>
          <p className="text-emerald-50 leading-relaxed text-lg">
            The hybrid framework successfully demonstrated that combining advanced computer vision (ConvNeXt) with Generative AI (LLMs) creates a powerful, end-to-end diagnostic tool. Achieving <strong>96% accuracy</strong> across 8 disease classes proves its reliability for real-world agricultural deployment.
          </p>
        </Card>

        <Card className="bg-slate-800 text-white border-none shadow-lg shadow-slate-900/20 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-4">
            <Globe size={32} />
          </div>
          <h3 className="font-bold text-xl mb-2">Real-world Ready</h3>
          <p className="text-slate-400 text-sm">Validated framework ready for mobile deployment.</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Key Takeaways">
          <ul className="space-y-4">
            {[
              "State-of-the-art classification accuracy (96%).",
              "Grad-CAM provides necessary transparency for farmer trust.",
              "LLM integration bridges the gap between diagnosis and actionable treatment.",
              "The pipeline is lightweight enough for edge-device optimization."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Future Scope">
          <ul className="space-y-4">
            {[
              "Integration with real-time drone video feeds.",
              "Multi-lingual LLM support for regional farmers (e.g., Hindi, Tamil).",
              "Expanding the dataset to include nutrient deficiency identification.",
              "Deployment as an offline mobile application via ONNX runtime."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Leaf className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="text-center mt-12 py-8 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Thank You</h2>
        <p className="text-slate-500">End of Presentation / Demonstration</p>
      </div>
    </div>
  );
};

export default Conclusion;
