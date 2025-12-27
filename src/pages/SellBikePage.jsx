import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBikes } from '../context/BikeContext';
import Button from '../components/Button';

const SellBikePage = () => {
  const navigate = useNavigate();
  const { addBike } = useBikes();

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    description: '',
    images: [''], // Array of image URLs, start with one empty input
    sellerName: '',
    sellerPhone: '',
    sellerEmail: '',
    category: '',
    condition: '',
    location: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, e) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Bike name is required.';
    if (!formData.brand) errors.brand = 'Brand is required.';
    if (!formData.model) errors.model = 'Model is required.';
    if (!formData.year || isNaN(formData.year) || formData.year < 1900 || formData.year > new Date().getFullYear() + 1) errors.year = 'Valid year is required.';
    if (!formData.price || isNaN(formData.price) || formData.price <= 0) errors.price = 'Valid price is required.';
    if (!formData.description) errors.description = 'Description is required.';
    if (!formData.images.some(img => img.trim() !== '')) errors.images = 'At least one image URL is required.';
    if (!formData.sellerName) errors.sellerName = 'Seller name is required.';
    if (!formData.sellerPhone) errors.sellerPhone = 'Seller phone is required.';
    if (!formData.sellerEmail || !/\S+@\S+\.\S+/.test(formData.sellerEmail)) errors.sellerEmail = 'Valid seller email is required.';
    if (!formData.category) errors.category = 'Category is required.';
    if (!formData.condition) errors.condition = 'Condition is required.';
    if (!formData.location) errors.location = 'Location is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const newBike = {
      name: formData.name,
      brand: formData.brand,
      model: formData.model,
      year: parseInt(formData.year),
      price: parseFloat(formData.price),
      description: formData.description,
      images: formData.images.filter(img => img.trim() !== ''), // Filter out empty image URLs
      seller: {
        name: formData.sellerName,
        phone: formData.sellerPhone,
        email: formData.sellerEmail,
      },
      category: formData.category,
      condition: formData.condition,
      location: formData.location,
    };

    addBike(newBike);
    navigate('/'); // Redirect to home page after adding
  };

  const inputClass = "block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200";
  const labelClass = "block text-gray-700 text-sm font-semibold mb-2";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-dark text-center mb-10">
        Sell Your Bike
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bike Details */}
          <fieldset className="border border-gray-200 p-6 rounded-lg">
            <legend className="text-xl font-bold text-dark mb-4">Bike Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Bike Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., Mountain Slayer Pro"
                />
                {formErrors.name && <p className={errorClass}>{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="brand" className={labelClass}>Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., Trek"
                />
                {formErrors.brand && <p className={errorClass}>{formErrors.brand}</p>}
              </div>
              <div>
                <label htmlFor="model" className={labelClass}>Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., X-Caliber 9"
                />
                {formErrors.model && <p className={errorClass}>{formErrors.model}</p>}
              </div>
              <div>
                <label htmlFor="year" className={labelClass}>Year</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., 2023"
                />
                {formErrors.year && <p className={errorClass}>{formErrors.year}</p>}
              </div>
              <div>
                <label htmlFor="price" className={labelClass}>Price (USD)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., 1800"
                  step="0.01"
                />
                {formErrors.price && <p className={errorClass}>{formErrors.price}</p>}
              </div>
              <div>
                <label htmlFor="category" className={labelClass}>Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select Category</option>
                  <option value="Mountain Bike">Mountain Bike</option>
                  <option value="Road Bike">Road Bike</option>
                  <option value="Hybrid Bike">Hybrid Bike</option>
                  <option value="Electric Bike">Electric Bike</option>
                  <option value="Kids Bike">Kids Bike</option>
                  <option value="BMX">BMX</option>
                  <option value="Cruiser">Cruiser</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.category && <p className={errorClass}>{formErrors.category}</p>}
              </div>
              <div>
                <label htmlFor="condition" className={labelClass}>Condition</label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select Condition</option>
                  <option value="New">New</option>
                  <option value="Used - Excellent">Used - Excellent</option>
                  <option value="Used - Very Good">Used - Very Good</option>
                  <option value="Used - Good">Used - Good</option>
                  <option value="Used - Fair">Used - Fair</option>
                </select>
                {formErrors.condition && <p className={errorClass}>{formErrors.condition}</p>}
              </div>
              <div>
                <label htmlFor="location" className={labelClass}>Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., New York, NY"
                />
                {formErrors.location && <p className={errorClass}>{formErrors.location}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="description" className={labelClass}>Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`${inputClass} h-32`}
                placeholder="Describe your bike in detail: features, condition, any upgrades, etc."
              ></textarea>
              {formErrors.description && <p className={errorClass}>{formErrors.description}</p>}
            </div>
          </fieldset>

          {/* Image URLs */}
          <fieldset className="border border-gray-200 p-6 rounded-lg">
            <legend className="text-xl font-bold text-dark mb-4">Image URLs</legend>
            {formData.images.map((imageUrl, index) => (
              <div key={index} className="flex items-center space-x-2 mb-3">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => handleImageChange(index, e)}
                  className={inputClass}
                  placeholder="Enter image URL (e.g., https://example.com/bike.jpg)"
                />
                {formData.images.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => removeImageField(index)}
                    variant="outline"
                    className="!px-3 !py-2 !border-red-500 !text-red-500 hover:!bg-red-500 hover:!text-white"
                  >
                    X
                  </Button>
                )}
              </div>
            ))}
            {formErrors.images && <p className={errorClass}>{formErrors.images}</p>}
            <Button
              type="button"
              onClick={addImageField}
              variant="secondary"
              className="mt-2"
            >
              Add Another Image
            </Button>
          </fieldset>

          {/* Seller Information */}
          <fieldset className="border border-gray-200 p-6 rounded-lg">
            <legend className="text-xl font-bold text-dark mb-4">Seller Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sellerName" className={labelClass}>Your Name</label>
                <input
                  type="text"
                  id="sellerName"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., John Doe"
                />
                {formErrors.sellerName && <p className={errorClass}>{formErrors.sellerName}</p>}
              </div>
              <div>
                <label htmlFor="sellerPhone" className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  id="sellerPhone"
                  name="sellerPhone"
                  value={formData.sellerPhone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., 555-123-4567"
                />
                {formErrors.sellerPhone && <p className={errorClass}>{formErrors.sellerPhone}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="sellerEmail" className={labelClass}>Email Address</label>
                <input
                  type="email"
                  id="sellerEmail"
                  name="sellerEmail"
                  value={formData.sellerEmail}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., your.email@example.com"
                />
                {formErrors.sellerEmail && <p className={errorClass}>{formErrors.sellerEmail}</p>}
              </div>
            </div>
          </fieldset>

          <Button type="submit" variant="primary" className="w-full mt-6">
            List Your Bike
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SellBikePage;
