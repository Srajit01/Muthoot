import React from 'react';
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Tooltip from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Branches from './pages/Branches';
import Education from './pages/Education';
import LearningModule from './pages/LearningModule';
import About from './pages/About';
import Dashboard from "./components/Dashboard";
import QuickLoan from "./pages/QuickLoan";
import ChatbotSupport from "./pages/ChatbotSupport";
import Accounts from "./pages/Accounts";
import VRConsultation from "./pages/VRConsultation";
import FinancialDashboard from "./pages/FinancialDashboard";
import YouthOffers from "./pages/YouthOffers";
import QuizGame from "./pages/QuizGame";
import Community from "./pages/Community";
import GoldLoanApplication from './pages/GoldLoanApplication';
import YouthEngagementAnalysis from './pages/YouthEngagementAnalysis';

//Game Imports
import Budgeting from './games/Budgeting';
import Savings from './games/Savings';
import Investing from './games/Investing';
import Credit from './games/Credit';
import Debt from './games/Debt';
import Retirement from './games/Retirement';
import TaxSavings from './games/TaxSavings';
import Fraud from './games/Fraud';
import LoanTerms from './games/Loanterms';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Tooltip.Provider>
      <Toaster position="top-right" />
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <div className="pt-16">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/education" element={<Education />} />
              <Route path="/education/:moduleId" element={<LearningModule />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Banking Features */}
              <Route path="/quick-loan" element={<QuickLoan />} />
              <Route path="/chatbot" element={<ChatbotSupport />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/vr-consultation" element={<VRConsultation />} />
              <Route path="/financial-dashboard" element={<FinancialDashboard />} />
              <Route path="/youth-offers" element={<YouthOffers />} />
              <Route path="/quiz-game" element={<QuizGame />} />
              <Route path="/community" element={<Community />} />
              
              {/* Additional Routes */}
              <Route path="/gold-loan-application" element={<GoldLoanApplication />} />
              <Route path="/youth-engagement-analysis" element={<YouthEngagementAnalysis />} />
                        {/* Game Routes */}
            <Route path="/game/budgeting" element={<Budgeting />} />
              <Route path="/game/savings" element={<Savings />} />
              <Route path="/game/investing" element={<Investing />} />
              <Route path="/game/credit" element={<Credit />} />
              <Route path="/game/debt" element={<Debt />} />
              <Route path="/game/loan-terms" element={<LoanTerms />} />
              <Route path="/game/retirement" element={<Retirement />} />
              <Route path="/game/tax-savings" element={<TaxSavings />} />
              <Route path="/game/fraud" element={<Fraud />} />
          
            </Routes>
          </div>
        </div>
      </Router>
    </Tooltip.Provider>
  </QueryClientProvider>
);

export default App;