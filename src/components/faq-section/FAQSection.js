import React, { useState } from 'react'
import './FAQSection.css'
import { faqData } from '../../constants/constants';

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="FAQ-section container">
      <div className="FAQ-section-wrapper">
        <p>FAQS</p>
        <h2>Everything you <br /> need to know</h2>

        <ul className="faq-list">
          {faqData.map((faq, index) => (
            <React.Fragment key={index}>
              <li className="faq-item">
                <div className="question" onClick={() => handleToggle(index)}>
                  <span>{faq.question}</span>
                  <button
                    className="expand-btn"
                    
                  >
                    {expandedIndex === index ? '-' : '+'}
                  </button>
                </div>
                {expandedIndex === index && (
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </li>
              <div className="white-divider"></div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FAQSection