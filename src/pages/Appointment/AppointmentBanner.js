
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className=''>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="xl:max-w-xl md:max-w-xs rounded-lg shadow-2xl" alt='' />


                    <div className='p-10'>
                        <DayPicker
                            styles={{
                                caption: { color: 'red' },
                            }}
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>




                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;