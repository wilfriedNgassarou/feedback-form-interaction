import { motion } from "motion/react"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setState: Dispatch<SetStateAction<'closed' | 'tmp' | 'opened'>>
}

export function Form({ setState }: Props) {
  return (
    <motion.form 
      layoutId="feedback"
      className="absolute bg-white cursor-default w-80 p-4 border-[1px] border-black/5 shadow"
      style={{ borderRadius: 16 }}
    >
      <span 
        onClick={() => setState('closed')}
        className="absolute top-2 right-2 w-5 h-5 cursor-pointer rounded-full flex justify-center items-center bg-gray-600"
      >
        <svg
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-3 h-3 stroke-white"
          viewBox="0 0 24 24"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </span>
      <h2 className="font-semibold text-xl">Share Feedback</h2>
      <p className="text-gray-600">Let us know you liked the most?</p>
      <div>
        <textarea
          className="w-full my-2 h-32 p-2 outline-none resize-none border-[1px] rounded-md placeholder:text-gray-400"
          placeholder="Type in your feedback (optional)"
        />
      </div>
      <button className="mt-1 flex items-center gap-1 bg-black text-white py-1 px-4 rounded-md">
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.912"
            d="m10.3 13.695 9.802-9.798M10.58 14.136l2.222 4.444c.537 1.075.806 1.612 1.144 1.756a1 1 0 0 0 .903-.061c.316-.188.51-.757.898-1.893l4.2-12.298c.338-.99.506-1.485.39-1.813a1 1 0 0 0-.609-.61c-.328-.115-.823.054-1.813.392l-12.297 4.2c-1.137.387-1.705.581-1.893.897a1 1 0 0 0-.061.904c.144.338.681.607 1.755 1.143l4.445 2.223c.177.088.265.133.342.192a1 1 0 0 1 .182.181c.059.077.103.166.191.343"
          />
        </svg>
        <span className="font-light">Send Now</span>
      </button>
    </motion.form>
  )
}