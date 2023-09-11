import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

const NewForm = () => {
    const [formData, setFormData] = useState({
      taskName: '',
      details: '',
      price: '',
      duration: '',
    });
  
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const jsonData = JSON.stringify(formData, null, 2);
      console.log(jsonData);
  
      // Show the popup when the form is submitted
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      // Close the popup and refresh the page
      setShowPopup(false);
      window.location.reload();
    };
  
    return (
      <Card className="w-[500px]">
        <form onSubmit={handleSubmit}>
          <div className="ml spacing-2 w-full">
          <h1 className="font-bold text-lg mb-6 mt-6 text-center">Create Task</h1>
  
            <h2 className="mb-4">
                Task Name:{" "}
                <input
                type="text"
                name="taskName"
                value={formData.taskName}
                onChange={handleInputChange}
                className="placeholder:text-blue-300 placeholder-italic w-96 px-5 py-2 rounded-full outline-none border"
                placeholder="Task Name"
                />
            </h2>

            <h2 className="mb-4">
                Details:{" "}
                <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                className="placeholder:text-blue-300 placeholder-italic w-96 px-5 py-2 rounded-full outline-none border"
                placeholder="Task Details"
                />
            </h2>

            <h2 className="mb-4">
                Price:{" "}
                <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="placeholder:text-blue-300 placeholder-italic w-96 px-5 py-2 rounded-full outline-none border"
                placeholder="Price"
                />
            </h2>

            <h2 className="mb-4">
                Duration:{" "}
                <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="placeholder:text-blue-300 placeholder-italic w-96 px-5 py-2 rounded-full outline-none border"
                placeholder="Duration"
                />
            </h2>

          </div>
  
          <div className="ml spacing-2 text-center">
            <button
              type="submit"
              className={`btn btn-primary mb-4 mt-4 ${showPopup ? 'disabled' : ''}`} // Disable button when the popup is shown
            >
              Create Task
            </button>
          </div>
        </form>
  
        {/* Popup */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Task Created</h2>
              <button className="btn btn-secondary" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </Card>
    );
  };

export default dynamic (() => Promise.resolve(NewForm), {ssr: false} )
