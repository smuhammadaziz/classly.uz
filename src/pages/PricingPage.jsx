import React from 'react';
import { Link } from 'react-router-dom';

function PricingPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
            <p className="text-lg text-gray-700 text-center mb-8">Choose the plan that fits your needs.</p>

            {/* You can reuse the pricing section from HomePage or create a more detailed one here */}
            <div className="text-center">
                <p className="mb-4">See pricing details on the <Link to="/#pricing" className="text-light-blue hover:underline">Homepage</Link>.</p>
                {/* Or build out a full pricing table here */}
            </div>

        </div>
    );
}

export default PricingPage; 