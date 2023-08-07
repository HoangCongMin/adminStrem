import "./dhcontent.css"
import video from '../../assets/video/small.mp4'
const Dhcontent = () => {
  return (
    <>
      <div className="dashboard">
        <div className="upload">
            <a href="">
                <box-icon color="white" size="25px" name='cloud-upload' type='solid' ></box-icon>
                <div className="upload-vd">upload video</div>
            </a>
        </div>
        <div className="search">
            <div className="btn-search">
                <a href="">
                 <div className="name-btn-search">
                    <p>Tìm kiếm theo</p>
                    <p>Tên</p>
                  </div>
                  <div className="icon-btn-search">
                  <box-icon size="12px" color="grey" type='solid' name='down-arrow'></box-icon>
                  </div>
                </a>
            </div>
            <div className="search-inp">
                <input type="text" placeholder="Từ khóa" />
            </div>
        </div>
    </div>
    <div className="box-quantity">
        <a href="">
            tổng:15
        </a>
    </div>
    <div className="video-tb">
        <table>
            <tr className="bgr-video">
                <th className="name-vd">Tên video</th>
                <th className="us-vd">Tạo bởi</th>
                <th className="date-vd">Ngày tạo</th>
                <th className="watch-vd">Xem</th>
            </tr>
            <tr className="fx-bgr-video">
                <td >
                    <div className="fix-video">
                        <video src={video}></video>
                        <div className="content-vd"> tan tung ket thuc live 11:50 31/7/2020</div>
                    </div>
                </td>
                <td>tantung</td>
                <td>11:50 31/7/2023</td>
                <td className="sz-btn">
                    <a href="">
                        <box-icon  color="white" name='play-circle'></box-icon>
                        <div>play</div>
                    </a>
                    <a href="">
                    <box-icon color="white" name='caret-down'></box-icon>
                    </a>

                </td>
            </tr>
            <tr className="fx-bgr-video">
                <td >
                    <div className="fix-video">
                        <video src={video}></video>
                        <div className="content-vd"> tan tung ket thuc live 11:50 31/7/2020</div>
                    </div>
                </td>
                <td>tantung</td>
                <td>11:50 31/7/2023</td>
                <td className="sz-btn">
                    <a href="">
                        <box-icon  color="white" name='play-circle'></box-icon>
                        <div>play</div>
                    </a>
                    <a href="">
                    <box-icon color="white" name='caret-down'></box-icon>
                    </a>

                </td>
            </tr>
            <tr className="fx-bgr-video">
                <td >
                    <div className="fix-video">
                        <video src={video}></video>
                        <div className="content-vd"> tan tung ket thuc live 11:50 31/7/2020</div>
                    </div>
                </td>
                <td>tantung</td>
                <td>11:50 31/7/2023</td>
                <td className="sz-btn">
                    <a href="">
                        <box-icon  color="white" name='play-circle'></box-icon>
                        <div>play</div>
                    </a>
                    <a href="">
                    <box-icon color="white" name='caret-down'></box-icon>
                    </a>

                </td>
            </tr>
            <tr className="fx-bgr-video">
                <td >
                    <div className="fix-video">
                        <video src={video}></video>
                        <div className="content-vd"> tan tung ket thuc live 11:50 31/7/2020</div>
                    </div>
                </td>
                <td>tantung</td>
                <td>11:50 31/7/2023</td>
                <td className="sz-btn">
                    <a href="">
                        <box-icon  color="white" name='play-circle'></box-icon>
                        <div>play</div>
                    </a>
                    <a href="">
                    <box-icon color="white" name='caret-down'></box-icon>
                    </a>

                </td>
            </tr>
            <tr className="fx-bgr-video">
                <td >
                    <div className="fix-video">
                        <video src={video}></video>
                        <div className="content-vd"> tan tung ket thuc live 11:50 31/7/2020</div>
                    </div>
                </td>
                <td>tantung</td>
                <td>11:50 31/7/2023</td>
                <td className="sz-btn">
                    <a href="">
                        <box-icon  color="white" name='play-circle'></box-icon>
                        <div>play</div>
                    </a>
                    <a href="">
                    <box-icon color="white" name='caret-down'></box-icon>
                    </a>

                </td>
            </tr>
            <tr className="fx-bgr-video">
                <td >
                    <div className="fix-video">
                        <video src={video}></video>
                        <div className="content-vd"> tan tung ket thuc live 11:50 31/7/2020</div>
                    </div>
                </td>
                <td>tantung</td>
                <td>11:50 31/7/2023</td>
                <td className="sz-btn">
                    <a href="">
                        <box-icon  color="white" name='play-circle'></box-icon>
                        <div>play</div>
                    </a>
                    <a href="">
                    <box-icon color="white" name='caret-down'></box-icon>
                    </a>

                </td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default Dhcontent