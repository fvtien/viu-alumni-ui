const menuData = [
  {
    id: "1",
    name: "Giới thiệu",
    children: [
      {
        id: "1.1",
        name: "Về VIU",
      },
      {
        id: "1.2",
        name: "Lãnh đạo, giảng viên",
      },
      {
        id: "1.3",
        name: "Kết quả",
      },
    ],
  },
  {
    id: "2",
    name: "Ngành đào tạo",
    children: [
      {
        id: "2.1",
        name: "Công nghệ kỹ thuật điện, điện tử",
        children: [
          {
            id: "2.1.1",
            name: "Hệ thống điện",
          },
          {
            id: "2.1.2",
            name: "Điện tử truyền thông",
          },
          {
            id: "2.1.3",
            name: "Điện tử điện lạnh",
          },
          {
            id: "2.1.4",
            name: "Điện tử y sinh",
          },
          {
            id: "2.1.5",
            name: "Điện tử y sinh",
          },
        ],
      },
      {
        id: "2.2",
        name: "Công nghệ kỹ thuật cơ khí",
        children: [
          {
            id: "2.2.1",
            name: "Cơ - tin kỹ thuật",
          },
          {
            id: "2.2.2",
            name: "Công nghệ chế tạo máy",
          },
          {
            id: "2.2.3",
            name: "Thiết kế cơ khí",
          },
          {
            id: "2.2.4",
            name: "Chế tạo khuôn mẫu",
          },
        ],
      },
      {
        id: "2.3",
        name: "Công nghệ kỹ thuật xây dựng",
        children: [
          {
            id: "2.3.1",
            name: "Xây dựng công nghiệp và dân dụng",
          },
          {
            id: "2.3.2",
            name: "Quản lý xây dựng",
          },
        ],
      },
      {
        id: "2.4",
        name: "Công nghệ kỹ thuật ô tô",
        children: [
          {
            id: "2.4.1",
            name: "Công nghệ ô tô",
          },
          {
            id: "2.4.2",
            name: "Điện - điện tử ô tô",
          },
          {
            id: "2.4.3",
            name: "Động cơ ô tô",
          },
        ],
      },
      {
        id: "2.5",
        name: "Công nghệ thông tin",
        children: [
          {
            id: "2.5.1",
            name: "Công nghệ thông tin",
          },
          {
            id: "2.5.2",
            name: "Thương mại điện tử",
          },
          {
            id: "2.5.3",
            name: "Thiết kế đồ họa",
          },
          {
            id: "2.5.4",
            name: "Quảng cáo số",
          },
          {
            id: "2.5.5",
            name: "Tin học - kế toán",
          },
          {
            id: "2.5.6",
            name: "Công nghệ truyền thông đa phương tiện",
          },
        ],
      },
      {
        id: "2.6",
        name: "Tài chính - Ngân hàng",
        children: [
          {
            id: "2.6.1",
            name: "Tài chính - Ngân hàng",
          },
          {
            id: "2.6.2",
            name: "Tài chính - Kế toán",
          },
          {
            id: "2.6.3",
            name: "Tài chính doanh nghiệp",
          },
          {
            id: "2.6.4",
            name: "Công nghệ tài chính",
          },
        ],
      },
      {
        id: "2.7",
        name: "Quản trị kinh doanh",
        children: [
          {
            id: "2.7.1",
            name: "Quản trị kinh doanh",
          },
          {
            id: "2.7.2",
            name: "Quản trị nân lực",
          },
          {
            id: "2.7.3",
            name: "Quản trị Marketing",
          },
          {
            id: "2.7.4",
            name: "Quản trị khách sạn và du lịch",
          },
          {
            id: "2.7.5",
            name: "Kinh doanh thương mại",
          },
          {
            id: "2.7.6",
            name: "Kinh doanh quốc tế",
          },
          {
            id: "2.7.7",
            name: "Quản trị bán lẻ",
          },
          {
            id: "2.7.8",
            name: "Quản trị chuỗi dịch vụ kim khí, điện máy",
          },
          {
            id: "2.7.9",
            name: "Quản trị chuỗi tạo mẫu và chăm sóc sắc đẹp",
          },
          {
            id: "2.7.10",
            name: "Quản trị chuỗi cung ứng sản phẩm nông nghiệp sạch",
          },
        ],
      },
      {
        id: "2.8",
        name: "Kinh tế",
        children: [
          {
            id: "2.8.1",
            name: "Kinh tế quản lý",
          },
          {
            id: "2.8.2",
            name: "Kế toán",
          },
          {
            id: "2.8.3",
            name: "Logistics",
          },
          {
            id: "2.8.4",
            name: "Kinh tế thương mại",
          },
          {
            id: "2.8.5",
            name: "Kinh tế quản trị thương mại",
          },
          {
            id: "2.8.6",
            name: "Kinh tế đầu tư",
          },
          {
            id: "2.8.7",
            name: "Kinh tế hộ gia đình",
          },
          {
            id: "2.8.8",
            name: "Kinh tế xây dựng",
          },
        ],
      },
    ],
  },
  { id: "3", name: "Tin tức - Sự kiện", link: "/news" },
  {
    id: "4",
    name: "Cựu sinh viên",
    link: "/alumni",
  },
  { id: "5", name: "Việc làm - Tuyển dụng", link: "/job" },
  { id: "6", name: "Liên hệ", link: "/contact" },
];

export const loadMenu = () => Promise.resolve(menuData);
