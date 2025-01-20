import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background-color .2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(to right, #4f004f, #760076, #4f004f);
  background-image: url('/SBCBanner.mp4');
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  height: 441px; /* Set a fixed height for all banners */
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease forwards;
  min-height: 350px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 350px; /* Set a minimum height for mobile */
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    animation: ${darken} 0.8s ease forwards;
  }
 }
`

export function WelcomeBanner() {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const store = useUserStore()
  const copyInvite = () => {
    store.set({ userModal: true })
    if (!wallet.connected) {
      walletModal.setVisible(true)
    }
  }

  return (
    <Welcome>
      <div>
        <h1>Welcome to Gamba v2 👋</h1>
        <p>
          A fair, simple and decentralized casino on Solana.
        </p>
      </div>
      <Buttons>
        <button onClick={copyInvite}>
          💸 Copy Invite
        </button>
        <button onClick={() => window.open('https://v2.gamba.so/', '_blank')}>
          🚀 Add Liquidity
        </button>
        <button onClick={() => window.open('https://discord.gg/HSTtFFwR', '_blank')}>
          💬 Discord
        </button>
      </Buttons>
    </Welcome>
  )
}
