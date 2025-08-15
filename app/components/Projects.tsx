// app/components/Projects.tsx
export default function Projects() {
    const projects = [
      {
        title: "BTC Price Prediction",
        description:
          "Developed a real-time Bitcoin price prediction system. Fetched live data, preprocessed it, and trained an LSTM (Sequential) deep learning model to forecast BTC prices for the next 10 hours. Integrated visualizations to show predictions and trends. Deployed with FastAPI backend and React-based frontend for interactive usage.",
        link: ""
      },
      {
        title: "Heart Stroke Prediction",
        description:
          "Built a predictive system using a Kaggle dataset for heart stroke risk assessment. Performed data preprocessing and Exploratory Data Analysis (EDA), trained KNN and XGBoost models to classify whether a patient is at risk of stroke. Deployed the model live using FastAPI with a React-based frontend.",
        link: ""
      },
      {
        title: "Person Classification Project",
        description:
          "Created a classification model to categorize individuals based on collected data. Performed data gathering, preprocessing, and model training. Deployed the application with FastAPI backend and React frontend for real-time classification predictions.",
        link: ""
      }
    ];
  
    return (
      <div className="text-center px-4 md:px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-900/50 to-black/50 border-2 border-red-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform block text-left backdrop-blur-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  