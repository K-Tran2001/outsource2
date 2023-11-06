import { useState } from 'react';

export function useLocalStorageState(initialValue) {
  const [selectedLanguage,setSelectedlanguage] = useState(initialValue);

  // Thêm bất kỳ logic hoặc hàm phụ trợ nào bạn muốn vào đây

  return [selectedLanguage,setSelectedlanguage];
}