const { test, expect } = require('@playwright/test');

const TEST_CASES = [
  { id: 'Pos_Fun_0001', input: 'naan veedu selkeren', expected: 'நான் வீடு செல்கிறேன் ' },

  { id: 'Pos_Fun_0002', input: 'nee naalakku kandi poviya?', expected: 'நீ நாளைக்கு கண்டி போவியா?' },

  { id: 'Pos_Fun_0003', input: 'Mazhai  peithathaal  naan  veettil  irundhen  ', expected: 'மழை  பெய்ததால்  நான்  வீட்டில்  இருந்தேன்  ' },

  { id: 'Pos_Fun_0004', input: 'naan padippen appuram vela seiven', expected: 'நான்  படிப்பேன்  அப்புறம்  வேல  செய்வேன் ' },

  { id: 'Pos_Fun_0005', input: 'Kathavai  moodu .', expected: 'கதவை  மூடு . ' },

  { id: 'Pos_Fun_0006', input: 'Avar  udhavi  seyyavillai .', expected: 'அவர்  உதவி  செய்யவில்லை .  ' },

  { id: 'Pos_Fun_0007', input: 'Shiromy  mekavum   azhagana pen ', expected: 'ஷிரோமி  மிகவும்   அழகான பெண் ' },

  { id: 'Pos_Fun_0008', input: 'Anbudan Vanakkam !', expected: 'அன்புடன்  வணக்கம் !  ' },

  { id: 'Pos_Fun_0009', input: 'Thayavu  seythu  ithai  urudhipaduthavum   ', expected: 'தயவு  செய்து  இதை  உறுதிப்படுத்தவும்  ' },

  { id: 'Pos_Fun_0010', input: 'Aam ,  enakku  purindhathu . ', expected: 'ஆம் ,  எனக்கு  புரிந்தது .  ' },

  { id: 'Pos_Fun_0011', input: 'Mannikkavum , naan  thaamadhamaaga  vanthuveden ', expected: 'மன்னிக்கவும் , நான்  தாமதமாக  வந்துவிட்டேன்   ' },

  { id: 'Pos_Fun_0012', input: 'konjam help panraiya?', expected: 'கொஞ்சம்  ஹெல்ப்  பண்றியா?' },

  { id: 'Pos_Fun_0013', input: 'Naan dhinamum thanneer  kudikkiren ', expected: 'நான் தினமும் தண்ணீர்  குடிக்கிறேன் ' },

  { id: 'Pos_Fun_0014', input: 'saran nanraka aadukeeran  .', expected: 'சரண் நன்றாக ஆடுகிறான்  . ' },

  { id: 'Pos_Fun_0015', input: 'kamal   orupattupadeenan ', expected: 'கமல்   ஒருபாட்டுபாடினான் ' },

  { id: 'Pos_Fun_0016', input: 'Avargal  naalai  varamaattaargal ', expected: 'அவர்கள்  நாளை  வரமாட்டார்கள்   ' },

  { id: 'Pos_Fun_0017', input: 'Naangal  paadam  padikkirOm ', expected: 'நாங்கள்  பாடம்  படிக்கிறோம்     ' },

  { id: 'Pos_Fun_0018', input: 'Avar  veettil  irukkiraar ', expected: 'அவர்  வீட்டில்  இருக்கிறார்      ' },

  { id: 'Pos_Fun_0019', input: 'Thayavu  seythu  enakku  pathil  sollungal  ', expected: 'தயவு  செய்து  எனக்கு  பதில்  சொல்லுங்கள் ' },

  { id: 'Pos_Fun_0020', input: 'naan oru manavan ', expected: 'நான் ஒரு மாணவன்  ' },

  { id: 'Pos_Fun_0021', input: 'Neenkal eaan epadi pakurenkal? ', expected: 'நீங்கள் ஏன் எப்படி பாக்குறீங்கள்?  ' },

  { id: 'Pos_Fun_0022', input: 'Saran epovum sapiduvan', expected: 'சரண் எப்போவும் சாப்பிடுவான்  ' },

  { id: 'Pos_Fun_0023', input: 'kovil mani kekum ', expected: 'கோவில் மணி கேக்கும்  ' },

  { id: 'Pos_Fun_0024', input: 'nalaiku padasalai vedumurai', expected: 'நாளைக்கு பாடசாலை விடுமுறை  ' },

  { id: 'Neg_Fun_0025', input: 'indaiku kapal varukenrathu', expected: 'இண்டைக்கு கப்பல் வருகிறது ' },

  { id: 'Neg_Fun_0026', input: 'Naan  Email anuppinen', expected: 'நான்  Email அனுப்பினேன்  ' },

  { id: 'Neg_Fun_0027', input: 'avanga office poganum', expected: 'அவர்கள் office போகனும்  ' },

  { id: 'Neg_Fun_0028', input: 'Teams meeting link WhatsApp moolam anuppappattadhu. ', expected: 'Teams meeting link WhatsApp மூலம் அனுப்பப்பட்டது  ' },

  { id: 'Neg_Fun_0029', input: 'NIC Ennai padhivu  seyya vendum ', expected: 'NIC எண்ணை பதிவு செய்தேன்' },

  { id: 'Neg_Fun_0030', input: 'neenga ready ah irukkeenga', expected: 'நீங்கள் ரெடி ஆ இருக்கீங்கா' },

  { id: 'Neg_Fun_0031', input: 'avan vanga book?', expected: 'அவன் வாங்கும் புத்தகம்!' },

  { id: 'Neg_Fun_0032', input: 'naan tea 10.00 maniku kudikkiren', expected: 'நான் டீ 10.00 மணிக்கு  குடிக்கிறேன்!' },

  { id: 'Neg_Fun_0033', input: 'unga veedu periya veedu', expected: 'உங்க வீடு பெரிய வீடு aa' },

  { id: 'Neg_Fun_0034', input: 'ennai marandhutaanga', expected: 'என்னை மறந்துடாங்க' },










];

async function runTest(page, testInfo, inputText, expected) {
  await page.goto('https://tamil.changathi.com');
  const input = page.locator('textarea, input[type="text"]').first();
  await input.fill('');
  // Type character-by-character with delay to emulate user typing
  await input.type(inputText, { delay: 75 });
  // Press space to trigger transliteration
  await page.keyboard.press('Space');

  // Poll for conversion
  const attempts = 8;
  const waitMs = 800;
  let output = '';
  for (let i = 0; i < attempts; i++) {
    output = await input.inputValue();
    if (output && output.includes(expected)) break;
    await page.waitForTimeout(waitMs);
  }

  // Attach test data for reporters
  await testInfo.attach('test-data', { body: Buffer.from(JSON.stringify({ input: inputText, expected, output })), contentType: 'application/json' });

  const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
  expect(normalize(output)).toContain(normalize(expected));
}

for (const tc of TEST_CASES) {
  test(tc.id + ' - ' + tc.input, async ({ page }, testInfo) => {
    await runTest(page, testInfo, tc.input, tc.expected);
  });
}
