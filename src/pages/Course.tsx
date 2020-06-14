import React  from 'react';
import { Table ,Input} from 'antd';
import axios from 'axios';


const {Search} = Input;

class Course extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {  
            data:[],
            keyWords:'',
        };
    }
    

    componentDidMount(){
        axios.get('/api/courseList').then((res:any)=>{
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }

    handleSearch=(value:any)=>{
        console.log(value)
    }

    clickme=(id:any)=>{
        alert(id);
    }

    render() { 
        // const [datas ,setDatas] = useState([]);
        // useEffect(()=>{
        //     getDatas();
        // })
        // const getDatas=()=>{
        //     axios.get('/api/courseList').then((res)=>{})
        // }
        let columns=[
            {
                title: '课程类别',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: '课程名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '课程总价',
                dataIndex: 'totalPrice',
                key: 'totalPrice',
            },
            {
                title: '课程数量',
                dataIndex: 'amount',
                key: 'amount',
            },
            {
                title: '课程地址',
                dataIndex: 'address',
                key: 'address',
                render:(text: string)=>{
                   return(
                    <>
                        <a target="blank" href={text}>查看课程</a>
                    </>
                   )
                }
            },
            {
                title: '操作',
                key: 'action',
                render:(record:{id:string})=>{
                    return(
                        <>
                            <a>编辑</a>
                            <br/>
                            <a onClick={this.clickme.bind(this,record.id)}>删除</a>
                        </>
                    ) 
                }
            },
        ]
        return ( 
            <div>
                <Search
                    placeholder="搜索课程"
                    onSearch={this.handleSearch}
                    style={{ width: 200 }}
                />
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}
 
export default Course;