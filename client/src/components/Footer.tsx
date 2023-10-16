import { useParams } from "react-router-dom"

export default function Footer() {
  const { id } = useParams()

  return (
    <footer className={`font-Nunito-Sans text-center break-words text-very-dark-blue-txt dark:text-white-txt-elem ${ id && 'absolute w-full bottom-0'}`}>
      <p className="py-4 text-[11px]">
        Challenge by <a className="text-primary-dark-cyan underline underline-offset-4" href="https://www.frontendmentor.io?ref=challenge" target="_blank" title="link to frontendmentor" tabIndex={0}>Frontend Mentor</a>. Coded by <a className="text-primary-moderate-cyan underline underline-offset-4" href="https://www.frontendmentor.io/profile/minibrusp" target="_blank" title="link to user profile on frontendmentor" tabIndex={0}>XIII</a>.
      </p>
    </footer>
  )
}