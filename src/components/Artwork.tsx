import { clsx } from 'clsx';
import { tailwindMerge } from '../utils';
export function Artwork({kind,large=false,alternate=false}:{kind:'orbit'|'form'|'pulse'|'mono';large?:boolean;alternate?:boolean}){return <div aria-hidden="true" className={tailwindMerge(clsx('artwork',`art-${kind}`,large&&'art-large',alternate&&'art-alternate'))}>
{kind==='orbit'&&<><div className="art-grid"/><div className="orbital-object">{Array.from({length:16},(_,i)=><i key={i} style={{transform:`rotateY(${i*11.25}deg) rotateX(22deg)`}}/>)}</div><span className="art-caption">FIG. 01 — ORBITAL STUDY</span><span className="art-coordinate">X: 28.44<br/>Y: 06.18</span><span className="art-star">+</span></>}
{kind==='form'&&<><span className="form-word">FORM<span>&</span>FUNCTION.</span><div className="sculpture"><i/><i/><i/></div><span className="art-caption">A JOURNAL OF SPACE & OBJECTS</span><span className="form-index">F/F®</span></>}
{kind==='pulse'&&<><div className="pulse-heading">PULSE<span>ENGINE®</span></div><div className="waveform">{Array.from({length:49},(_,i)=><i key={i} style={{height:`${15+Math.abs(Math.sin(i*.41)*Math.cos(i*.12))*80}%`,animationDelay:`${i*-.07}s`}}/>)}</div><span className="art-caption">SOUND IN. FEELING OUT.</span><span className="pulse-frequency">128.00 BPM</span></>}
{kind==='mono'&&<><div className="mono-header">MONOGRAM<span>OBJECTS FOR THE EVERYDAY ↗</span></div><div className="mono-object"><span>m.</span></div><span className="mono-word">LESS, BUT<br/>BETTER.</span><span className="art-caption">COLLECTION NO. 001</span></>}
</div>}
