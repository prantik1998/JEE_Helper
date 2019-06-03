# pages/tests.py
from django.test import SimpleTestCase, TestCase


class PagesTests(SimpleTestCase):
    def test_home_page_status_code(self):
        response = self.client.get('/testpapers/')
        self.assertEqual(response.status_code, 200)

    def test_about_page_status_code(self):
        response = self.client.get('/testpapers/about')
        self.assertEqual(response.status_code, 200)