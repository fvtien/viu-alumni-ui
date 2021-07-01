/* eslint-disable eqeqeq */
import React, { useState } from "react";

import { Input, Select, Form } from "antd";
import { SearchOutlined, AimOutlined } from "@ant-design/icons";

import MainLayout from "@/app/components/layout";
import Job from "@/app/components/job";
import { mockJob } from "@/app/components/job/mock/mock_job";
import "./job.component.scss";

const { Option } = Select;

const mockZone = [
  {
    zone_id: 1,
    name: "Hà Nội",
  },
  {
    zone_id: 2,
    name: "HCM",
  },
  {
    zone_id: 3,
    name: "Thái Bình",
  },
];

const JobPage = () => {
  const [jobItem, setJobItem] = useState(mockJob);
  const [form] = Form.useForm();

  const handleChange = () => {
    const keyword = form.getFieldValue("keyword");
    const zone = form.getFieldValue("zone");
    // eslint-disable-next-line array-callback-return
    const filteredValue = mockJob.filter(item => {
      if (keyword !== undefined && zone !== undefined) {
        return (
          item.job_name.toLowerCase().indexOf(keyword.toLowerCase()) != -1 &&
          item.zone == zone
        );
      }
      if (keyword !== undefined && zone === undefined) {
        return item.job_name.toLowerCase().indexOf(keyword.toLowerCase());
      }
      if (keyword === undefined && zone !== undefined) {
        return item.zone == zone;
      }
    });
    setJobItem(filteredValue);
  };

  return (
    <MainLayout>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col--12">
              <h2 className="section__title">VIỆC LÀM</h2>
            </div>
          </div>
          <div className="row">
            <div className="col--2"></div>
            <div className="col--8">
              <Form className="form-search" form={form}>
                <Form.Item name="keyword">
                  <Input
                    placeholder="Nhập từ khóa tìm kiếm"
                    allowClear
                    onChange={handleChange}
                    suffix={<SearchOutlined />}
                  />
                </Form.Item>
                <Form.Item name="zone">
                  <Select
                    showSearch
                    allowClear
                    suffixIcon={<AimOutlined />}
                    placeholder="Nhập địa điểm"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                    onChange={handleChange}
                  >
                    {mockZone.map(item => (
                      <Option key={item.zone_id} value={item.name}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="row">
            <Job job={jobItem} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobPage;
