// app/components/Certifications.tsx
export default function Certifications() {
    const certificates = [
      {
        title: "Exploratory Data Analysis for Machine Learning",
        date: "May 2025",
        link: "https://coursera.org/share/dd8ea47136225e06125d5ac4c29b682c",
        description:
          "Awarded by IBM Coursera. Learned to explore datasets, handle missing values, clean data, visualize insights, and prepare structured data for machine learning models. Gained hands-on experience with real-world datasets to make actionable insights."
      },
      {
        title: "Supervised Machine Learning: Regression",
        date: "May 2025",
        link: "https://coursera.org/share/dd8ea47136225e06125d5ac4c29b682c",
        description:
          "Awarded by IBM Coursera. Built regression models to predict numerical outcomes, learned to evaluate model performance using metrics like RMSE and R², and applied regression techniques to solve real-world problems."
      },
      {
        title: "Supervised Machine Learning: Classification",
        date: "May 2025",
        link: "https://coursera.org/share/dd8ea47136225e06125d5ac4c29b682c",
        description:
          "Awarded by IBM Coursera. Studied classification algorithms including logistic regression, decision trees, and k-NN. Learned to preprocess data, train models, and evaluate accuracy and precision on test datasets."
      },
      {
        title: "Unsupervised Machine Learning",
        date: "May 2025",
        link: "https://coursera.org/share/dd8ea47136225e06125d5ac4c29b682c",
        description:
          "Awarded by IBM Coursera. Explored clustering methods like K-Means, hierarchical clustering, and dimensionality reduction techniques to discover patterns in unlabeled data. Applied these methods to real-world datasets."
      },
      {
        title: "Deep Learning and Reinforcement Learning",
        date: "May 2025",
        link: "https://coursera.org/share/dd8ea47136225e06125d5ac4c29b682c",
        description:
          "Awarded by IBM Coursera. Learned neural networks, convolutional networks, and reinforcement learning basics. Implemented deep learning models for image recognition and experimented with AI-based decision-making."
      },
      {
        title: "Machine Learning Capstone",
        date: "May 2025",
        link: "https://coursera.org/share/dd8ea47136225e06125d5ac4c29b682c",
        description:
          "Awarded by IBM Coursera. Applied the complete machine learning pipeline in a capstone project: data collection, preprocessing, model training, evaluation, and deployment. Solved a practical machine learning problem end-to-end."
      }
    ];
  
    return (
      <div className="text-center px-4 md:px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-900/40 to-black/40 border-2 border-red-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform block text-left backdrop-blur-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-red-400 font-medium mb-2">{cert.date}</p>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  