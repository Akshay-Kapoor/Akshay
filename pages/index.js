import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
      <div className='index'>
          <h1 className='head'> Welcome to Akshay&apos;s Website</h1><br></br>
          <h4 className='bio'>Updating Actively as I try to learn and build more<br></br><br></br>
            Interested in AI, Linear Algebra, Genomics, Geopolitics, Physics, Trains, consciousness and Cryptography</h4><br>
            </br>
            <h3>Stuff I am <a className='a' href='reading'>reading</a></h3>
            <h3>Stuff I am Excited <a className='a' href='Exciting'>about</a></h3>

            <br></br>
            <h5><time></time>Last Updated - 4 January, 2023</h5>
            <footer>© 2023 Akshay Kapoor</footer><br>
            </br>
            <footer><a href="https://www.digits.net" target="_blank" rel="noreferrer">
    <Image src="https://counter.digits.net/?counter={38ac2412-f098-68a4-fde0-d57d5ddfb2a7}&template=simple"
     alt="Hit Counter by Digits" width="2" height= "5"  />
  </a></footer>
        </div>
  )
}