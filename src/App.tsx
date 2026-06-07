import React, { useState, useEffect } from 'react';
import { originalQuestions, shuffleArray, MultipleChoiceQuestion } from './data';
import { explanationsMap } from './explanations';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, Award, Info, Sparkles, PlayCircle, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type QuizQuestion = MultipleChoiceQuestion & {
  isRepeat?: boolean;
  explanation?: string;
};

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const totalOriginal = originalQuestions.length;

  const startQuiz = () => {
    const shuffled: QuizQuestion[] = shuffleArray(originalQuestions).map(q => ({
      ...q,
      explanation: explanationsMap[q.id]
    }));
    
    setQuestions(shuffled);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
    setIsStarted(true);
  };

  const handleOptionClick = (idx: number) => {
    if (isAnswerRevealed) return;
    
    setSelectedOption(idx);
    setIsAnswerRevealed(true);
    
    const isCorrect = idx === questions[currentIdx].correctAnswer;
    const isRepeat = questions[currentIdx].isRepeat;

    if (isCorrect) {
      if (!isRepeat) {
        setScore(s => s + 1);
      }
      setShowExplanation(false);
    } else {
      setShowExplanation(true);
      
      // Repeat question later
      setQuestions(prev => {
        const newQs = [...prev];
        const repeatedQ = { ...prev[currentIdx], isRepeat: true };
        newQs.push(repeatedQ);
        return newQs;
      });
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#f0fdfa] flex flex-col items-center justify-center p-6 relative overflow-hidden font-arabic" dir="rtl">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] text-transparent h-[40%] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40%] text-transparent h-[40%] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[40%] text-transparent h-[40%] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="bg-white/90 backdrop-blur-xl border-4 border-teal-100 shadow-[12px_12px_0px_#99f6e4] rounded-3xl p-8 sm:p-12 max-w-xl w-full text-center relative z-10"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-teal-500 rounded-3xl flex items-center justify-center shadow-lg relative group transition-transform duration-300 transform rotate-6 hover:rotate-0">
               <BrainCircuit className="w-12 h-12 text-white absolute" />
               <Sparkles className="w-8 h-8 text-orange-300 absolute -top-4 -right-4 animate-bounce" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-teal-900 mb-4 font-arabic leading-tight">
            امتحان شلة المحنكين
          </h1>
          
          <div className="bg-orange-50 inline-block px-8 py-3 rounded-2xl border-2 border-orange-200 mb-8 sm:mb-10 shadow-sm transform -rotate-2">
             <p className="text-2xl sm:text-3xl text-orange-600 font-bold tracking-wide">
              للنجاح المستكين ✌️
            </p>
          </div>

          <ul className="text-right text-teal-800 space-y-4 mb-10 font-bold text-base sm:text-lg bg-teal-50/50 p-6 rounded-2xl border-2 border-teal-100 shadow-inner">
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-200 text-teal-800 shrink-0">١</span>
              <span>٤٠ سؤال إختياري في الـ Vitamins.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-200 text-orange-800 shrink-0">٢</span>
              <span>الإجابة الخاطئة سيتم شرحها علمياً ببساطة 💡</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-200 text-blue-800 shrink-0">٣</span>
              <span>تكرار ذكي للأسئلة الخاطئة عشان المعلومة تثبت!</span>
            </li>
          </ul>

          <button 
            onClick={startQuiz}
            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 font-bold text-white bg-teal-500 border-b-4 border-teal-700 rounded-2xl hover:bg-teal-400 hover:-translate-y-1 hover:border-b-8 transition-all active:border-b-0 active:translate-y-2 text-2xl shadow-lg"
          >
            <PlayCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>ابدأ التحدي الآن</span>
          </button>
        </motion.div>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / totalOriginal) * 100);
    return (
      <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-6 font-arabic" dir="rtl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="quiz-card max-w-lg w-full rounded-3xl p-10 text-center relative overflow-hidden"
        >
          {percentage >= 80 && (
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          )}
          <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-teal-200 animate-bounce">
            <Award className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black text-teal-900 mb-2">عاش يا بطل! 👏</h2>
          <p className="text-teal-700 mb-8 font-medium text-lg">خلصت الاختبار والمحنكين فخورين بيك.</p>
          
          <div className="bg-white rounded-2xl p-6 mb-8 border-2 border-teal-100 shadow-sm relative z-10 flex flex-col items-center">
            <div className="text-6xl font-black text-orange-500 mb-2 font-sans" dir="ltr">{percentage}%</div>
            <div className="text-slate-500 font-bold uppercase text-lg group">النتيجة: {score} من {totalOriginal}</div>
          </div>

          <button 
            onClick={startQuiz}
            className="w-full py-4 bg-teal-500 hover:bg-teal-600 border-b-4 border-teal-700 active:border-b-0 active:translate-y-1 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-teal-200 text-2xl"
          >
            <RotateCcw className="w-6 h-6" />
            إعادة الاختبار
          </button>
        </motion.div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-teal-50 text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900 flex flex-col p-4 sm:p-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-900 title-font font-arabic">Biochem Master: Vitamin MCQs</h1>
            <p className="text-teal-600 text-sm font-bold font-arabic">المحنكين ✌️</p>
          </div>
        </div>
        
        <div className="bg-white px-4 sm:px-6 py-3 rounded-2xl shadow-sm border-2 border-teal-100 flex items-center gap-4 sm:gap-8 w-full sm:w-auto overflow-x-auto">
          <div className="text-center min-w-[4rem]">
            <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Progress</p>
            <p className="text-lg sm:text-xl font-bold text-teal-600">{currentIdx + 1}/{questions.length}</p>
          </div>
          <div className="h-8 w-px bg-slate-100 shrink-0"></div>
          <div className="text-center min-w-[4rem]">
            <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Score</p>
            <p className="text-lg sm:text-xl font-bold text-orange-500">{score * 10} pts</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start p-0 w-full max-w-5xl mx-auto h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full quiz-card rounded-3xl p-6 sm:p-10 flex flex-col mb-6"
          >
            <div className="flex flex-col gap-6 h-full">
              <div className="flex items-center gap-3">
                <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shrink-0">
                  Question {currentIdx + 1} of {questions.length}
                </span>
                
                {currentQ.isRepeat && (
                  <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shrink-0 flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" /> REPEAT
                  </span>
                )}
                
                <span className="text-slate-300">•</span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium italic truncate">
                  Intermediate Level
                </span>
              </div>
              
              <h2 className="text-xl sm:text-3xl font-semibold text-slate-800 leading-snug">
                {currentQ.question}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctAnswer;
                  
                  let stateClass = "bg-white border-slate-200 text-slate-700 hover:border-teal-400 hover:bg-teal-50";
                  let letterClass = "bg-slate-100 text-slate-500 group-hover:bg-teal-500 group-hover:text-white";
                  
                  if (isAnswerRevealed) {
                    if (isSelected && isCorrect) {
                       stateClass = "border-teal-500 bg-teal-50 ring-2 ring-teal-200 shadow-inner text-teal-900";
                       letterClass = "bg-teal-500 text-white";
                    } else if (isSelected && !isCorrect) {
                       stateClass = "border-orange-500 bg-orange-50 ring-2 ring-orange-200 shadow-inner text-orange-900";
                       letterClass = "bg-orange-500 text-white";
                    } else if (isCorrect) {
                       stateClass = "border-teal-400 bg-teal-50/50 text-teal-800";
                       letterClass = "bg-teal-500 text-white";
                    } else {
                       stateClass = "bg-white border-slate-100 opacity-50 text-slate-500 cursor-not-allowed";
                       letterClass = "bg-slate-100 text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={isAnswerRevealed}
                      className={`option-btn w-full text-left p-4 sm:p-5 rounded-2xl border-2 flex items-center group ${stateClass}`}
                    >
                      <span className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-bold text-lg mr-4 transition-colors ${letterClass}`}>
                        {optionLetters[idx]}
                      </span>
                      <span className="flex-1 text-base sm:text-lg font-medium">{option}</span>
                      
                      {isAnswerRevealed && isCorrect && <CheckCircle2 className="w-7 h-7 text-teal-500 shrink-0 ml-2" />}
                      {isAnswerRevealed && isSelected && !isCorrect && <XCircle className="w-7 h-7 text-orange-500 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {showExplanation && (
               <motion.div 
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-blue-900 shadow-inner"
                 dir="rtl"
               >
                 <div className="flex items-center gap-2 mb-2 font-bold font-arabic">
                   <Info className="w-6 h-6 text-blue-600" />
                   <span className="text-xl text-blue-700">توضيح مبسط من المحنكين:</span>
                 </div>
                 <p className="text-lg leading-relaxed font-arabic font-bold text-slate-700">
                   {currentQ.explanation}
                 </p>
               </motion.div>
            )}

            {isAnswerRevealed && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex justify-between items-center border-t border-slate-100 pt-6"
              >
                <div className="hidden sm:block"></div>
                <button
                  onClick={nextQuestion}
                  className="px-8 sm:px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-[0_5px_0_#0f766e] active:shadow-[0_0px_0_#0f766e] active:translate-y-1 transition-all uppercase tracking-wider w-full sm:w-auto justify-center text-lg"
                >
                  {currentIdx < questions.length - 1 ? 'Next Question' : 'View Results'}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
