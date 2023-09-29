import { FC, useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {
  email: string;
};

const SubmitCode: FC<Props> = ({ email }) => {
  const router = useRouter();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    if (!/^[0-9]*$/.test(value)) return;

    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    if (index < 5 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    } else if (index > 0 && value === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && verificationCode[index] === "") {
      event.preventDefault();
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = event.key;
      if (index < 5 && event.key !== "") {
        inputRefs.current[index + 1]?.focus();
      }

      setVerificationCode(newVerificationCode);
    }
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData("text");
    const newVerificationCode = [...verificationCode];

    if (/^\d{6}$/.test(clipboardData)) {
      for (let i = 0; i < 6; i++) {
        newVerificationCode[i] = clipboardData[i];
      }

      setVerificationCode(newVerificationCode);
      inputRefs.current[0]?.focus();
    }
  };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, email }),
      });

      if (res.status === 200) {
        setError(null);

        router.push("/");
      } else {
        setError("Code error");
      }
    } catch (err) {
      setError("Wrong code");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="text-slate-400 flex justify-center items-center mb-2">
        Enter 6-digit verification code sent to your email
      </div>
      <div className="flex  justify-center items-center gap-2">
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            className="h-12 w-8 rounded-md border-[1px] border-slate-400 text-center text-3xl"
            value={digit}
            onChange={(e) => handleInputChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={(e) => handlePaste(e, index)}
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </div>

      <button
        className="btn-blue btn-large w-full flex gap-2 mt-4"
        type="submit"
      >
        Submit Verification Code
      </button>
      {error && (
        <div className="mt-1 w-full flex justify-center items-center">
          {error}
        </div>
      )}
    </form>
  );
};

export default SubmitCode;
