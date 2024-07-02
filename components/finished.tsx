import * as React from 'react';
import { useFormData } from '@/contexts/form-data-context';
import axios from 'axios';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

const Finished = () => {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { formData } = useFormData();

  React.useEffect(() => {
    const sheet = {
      Name: formData.fullname,
      Email: formData.email,
      Address: formData.address,
      Phone: formData.phonenumber,
      'Date of birth': formData.userDOB,
      Occupation: formData.occupation,
      'Estimate household': formData.estimate,
      Spouse: formData.married,
      'Spouse DOB': formData.spouseDOB,
      'Spouse name': formData.spousename,
      Dependant: formData.dependant,
      'Dependant DOB': formData.dependantDOB,
      'Dependant name': formData.dependantname,
      'Household members 1': formData.householdNumber,
      'Household members 2': formData.householdAges,
      Carriers: formData.carrierSelection,
      'Eligible for health coverage':
        formData.eligibleForHealthCoverage,
      'Individual or family coverage': formData.coverage,
      'American Indian or Alaska Native': formData.tribeType,
      'Daily activities': formData.medicalFacility,
      'Physical disability': formData.applyingForCoverage,
    };

    setError(false);
    setSuccess(false);
    setLoading(true);

    axios
      .post(
        'https://sheet.best/api/sheets/dc02882c-92c5-4d12-933b-23ea443c9779',
        sheet,
      )
      .then((data) => {
        console.log(data);
        setLoading(false);
        setSuccess(true);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className='flex h-[70dvh] w-full items-center justify-center'>
          <ClipLoader loading={loading} />
        </div>
      )}

      {success && (
        <div className='flex flex-col items-center justify-center pb-8'>
          <Image
            alt='finish'
            height={200}
            src='/icons/finish.svg'
            width={200}
          />

          <h1 className='my-1 text-3xl font-bold text-[#101828]'>
            Thank You!
          </h1>
          <p className='mx-auto max-w-lg text-center '>
            Your quote request has been submitted successfully. Please
            check your email for confirmation and a copy of your
            submission.
          </p>
        </div>
      )}

      {error && (
        <div>
          <h1 className='my-1 text-3xl font-bold text-[#101828]'>
            Something went wrong
          </h1>
        </div>
      )}
    </div>
  );
};

export default Finished;
