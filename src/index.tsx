import React from 'react'
import './index.css'

const handleReload = (): void => {
  window.location.reload()
}

interface Props {
  show?: boolean
  imgUrl?: string
  status?: string
  msg?: string
  confirm?: boolean
  okText?: string
  cancelText?: string
  save?: () => void
  cancel?: () => void
  width?: string
  height?: string
  backgroundColor?: string
  borderRadius?: string
  btnColor?: string
  btnBorderRadius?: string
}

const defaultProps: Props = {
  show: true,
  imgUrl: '/assets/emoji_happy.png',
  status: 'Success',
  msg: 'Project created successfully~ ー( ´ ▽ ` )ﾉ',
  okText: 'OK',
  cancelText: 'Cancel',
  confirm: false,
  save: handleReload,
  cancel: handleReload,
  width: '400px',
  height: '200px',
  backgroundColor: 'white',
  borderRadius: '25px',
}

export const Feedback: React.FC<Props> = ({
  show,
  imgUrl,
  status,
  msg,
  confirm,
  okText,
  cancelText,
  save,
  cancel,
  width,
  height,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <div>
      {show ? (
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
          }}
          className="feedback-container"
        >
          <img src={imgUrl} alt="feedback msg" />
          <div>
            <h3>{status}</h3>
            <p>{msg}</p>

            <button onClick={save}>{okText}</button>

            {confirm === true ? (
              <button
                style={{
                  marginLeft: '20px',
                }}
                onClick={cancel}
              >
                {cancelText}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

Feedback.defaultProps = defaultProps
