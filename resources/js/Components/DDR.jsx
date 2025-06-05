import React from 'react';

export default function DDR({ checked, onChange, className = '', ...props }) {
    return (
        <label className={`inline-flex items-center cursor-pointer ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="hidden"
                {...props}
            />
            <span>
                {checked ? (
                    <img src="/GDR.png" alt="Checked" className="w-10 h-10" />
                ) : (
                    <img src="/GDR.png" alt="Checked" className="w-10 h-10" />
                )}
            </span>
        </label>
    );
}