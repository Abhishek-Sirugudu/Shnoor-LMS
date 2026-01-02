import React, { useState } from 'react';
import { FaTrash, FaPlus, FaCheckCircle } from 'react-icons/fa';
import '../Dashboard.css';

const QuestionBank = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: "What is the capital of France?", options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" }, correct: "C" }
  ]);

  const [newQuestion, setNewQuestion] = useState({
    text: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correct: 'A'
  });

  const handleInputChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const addQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.text || !newQuestion.optionA || !newQuestion.optionB) return;

    const q = {
      id: Date.now(),
      text: newQuestion.text,
      options: {
        A: newQuestion.optionA,
        B: newQuestion.optionB,
        C: newQuestion.optionC,
        D: newQuestion.optionD
      },
      correct: newQuestion.correct
    };

    setQuestions([...questions, q]);
    setNewQuestion({ text: '', optionA: '', optionB: '', optionC: '', optionD: '', correct: 'A' });
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="split-layout">


      <div className="form-box">
        <h3 className="form-header">Question Builder</h3>
        <form onSubmit={addQuestion}>
          <div className="form-group">
            <label>Question Text</label>
            <textarea
              name="text"
              rows="3"
              placeholder="Enter your question here..."
              value={newQuestion.text}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label>Option A</label>
              <input type="text" name="optionA" placeholder="Option A" value={newQuestion.optionA} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Option B</label>
              <input type="text" name="optionB" placeholder="Option B" value={newQuestion.optionB} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Option C (Optional)</label>
              <input type="text" name="optionC" placeholder="Option C" value={newQuestion.optionC} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Option D (Optional)</label>
              <input type="text" name="optionD" placeholder="Option D" value={newQuestion.optionD} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '10px' }}>
            <label>Select Correct Answer</label>
            <select name="correct" value={newQuestion.correct} onChange={handleInputChange}>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
              <option value="D">Option D</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              <FaPlus /> Add to Test
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT COLUMN: PREVIEW LIST */}
      <div>
        <div className="table-header" style={{ borderRadius: '8px 8px 0 0', borderBottom: 'none' }}>
          <h3>Question Preview ({questions.length})</h3>
        </div>
        <div className="table-container" style={{ maxHeight: '600px', overflowY: 'auto', borderRadius: '0 0 8px 8px' }}>
          {questions.length === 0 ? (
            <div style={{ padding: '30px', textAlign: 'center', color: '#6b7280' }}>
              No questions added yet.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {questions.map((q, index) => (
                <div key={q.id} className="question-card">
                  <div className="question-header">
                    <h4>
                      <span className="question-number">Q{index + 1}.</span>
                      {q.text}
                    </h4>
                    <button onClick={() => deleteQuestion(q.id)} className="btn-icon delete" title="Delete">
                      <FaTrash />
                    </button>
                  </div>

                  <div className="options-grid">
                    {Object.entries(q.options).map(([key, val]) => (
                      val && (
                        <div key={key} className={`question-option ${key === q.correct ? 'correct' : ''}`}>
                          <span className="option-badge">
                            {key}
                          </span>
                          {val}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default QuestionBank;