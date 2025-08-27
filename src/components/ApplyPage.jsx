import { useState, useEffect, useContext, } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const apiURL = import.meta.env.VITE_API_URL;

function ApplyPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [studentId, setStudentId] = useState('');
    const [program, setProgram] = useState('');
    const [studyYear, setStudyYear] = useState('');
    const [emailConsent, setEmailConsent] = useState(true);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(null);

    async function handleSignup(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${apiURL}/application`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, studentId, firstName, lastName, emailConsent, program, studyYear})
            });
            const data = await response.json();
            if(!response.ok) {
                setErrors(data.errors);
                setSuccess(false);
                return;
            } else {
                setErrors([]);
                setSuccess(true);
                return;
            }
        } catch(err){
            console.log(err);
        }
    }

    return (
    <>
      <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr] min-h-full 
      justify-center px-6 py-2 lg:px-8 w-full overflow-y-auto">
        <div className='popupmessages'>
            {errors.length != 0 && (
                <ul className='text-center mt-5 text-xl
                text-red-500 font-extrabold'>
                    {errors.map((error, index) => {
                        return (
                            <li className=''
                                key={index}>
                                    {error.msg}
                            </li>
                        );
                    })}
                </ul>
            )}
            {success && (
                <ul className='text-center mt-5 text-xl
                text-green-500 font-extrabold'>
                    <li className=''>
                        Application Submitted!
                    </li>
                </ul>
            )}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {!success && (
            <form onSubmit={handleSignup} className="space-y-6">
                <div>
                <label htmlFor="firstName" className="block text-md/6 font-medium text-white">
                    First Name
                </label>
                <div className="mt-2">
                    <input onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white/100 px-3 py-1.5 text-base 
                    text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                    focus:outline-2 focus:-outline-offset-2 focus:outline-[#1F80FF] sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="lastName" className="block text-md/6 font-medium text-white">
                    Last Name
                    </label>
                </div>
                <div className="mt-2">
                    <input onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white/100 px-3 py-1.5 text-base 
                    text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                    focus:outline-2 focus:-outline-offset-2 focus:outline-[#1F80FF] sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="email" className="block text-md/6 font-medium text-white">
                    YorkU Email
                    </label>
                </div>
                <div className="mt-2">
                    <input onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md bg-white/100 px-3 py-1.5 text-base 
                    text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                    focus:outline-2 focus:-outline-offset-2 focus:outline-[#1F80FF] sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="studentId" className="block text-md/6 font-medium text-white">
                    Student Number
                </label>
                <div className="mt-2">
                    <input onChange={(e) => setStudentId(e.target.value)}
                    id="studentId"
                    name="studentId"
                    type="number"
                    required
                    className="block w-full rounded-md bg-white/100 px-3 py-1.5 text-base 
                    text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                    focus:outline-2 focus:-outline-offset-2 focus:outline-[#1F80FF] sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="program" className="block text-md/6 font-medium text-white">
                    Program
                </label>
                <div className="mt-2">
                    <input onChange={(e) => setProgram(e.target.value)}
                    id="program"
                    name="program"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white/100 px-3 py-1.5 text-base 
                    text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                    focus:outline-2 focus:-outline-offset-2 focus:outline-[#1F80FF] sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="studyYear" className="block text-md/6 font-medium text-white">Study Year</label>
                <div className="mt-2">
                    <select
                    id="studyYear" name="studyYear" required
                    value={studyYear}
                    onChange={(e) => setStudyYear(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[#1F80FF] sm:text-sm/6"
                    >
                    <option value="" disabled>Select your year</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Fifth+">Fifth+</option>
                    </select>
                </div>
                </div>

                <fieldset>
                <legend className="block text-md/6 font-medium text-white">Do You Consent to Receiving Emails?</legend>
                <div className="mt-2 flex items-center gap-6 text-white">
                    <label className="inline-flex items-center gap-2">
                    <input
                        type="radio" name="emailConsent" value="true"
                        checked={emailConsent === true}
                        onChange={() => setEmailConsent(true)}
                        className="h-4 w-4 text-[#1F80FF] focus:ring-[#1F80FF]"
                    />
                    <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                    <input
                        type="radio" name="emailConsent" value="false"
                        checked={emailConsent === false}
                        onChange={() => setEmailConsent(false)}
                        className="h-4 w-4 text-[#1F80FF] focus:ring-[#1F80FF]"
                    />
                    <span>No</span>
                    </label>
                </div>
                </fieldset>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#1F80FF] px-3 py-1.5 text-sm/6 font-semibold 
                    text-white hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-500 hover:cursor-pointer"
                >
                    Submit Application
                </button>
                </div>
            </form>
            )}
        </div>
      </div>
    </>
    )
}

export default ApplyPage
